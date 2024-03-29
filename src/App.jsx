import './App.css'
import useMovies from './hooks/useMovies'
import ShowMovies from './components/ShowMovies'
import useForm from './hooks/useForm'

function App() {
  const  { value, formError, setValue } = useForm()
  const { movie, isLoading,  getMovies } = useMovies({value})

  // Handling form in a 'controlled' way, because React is controlling the state.
  // In this way its easier to perform form validation.
  function handleSubmit (event) {
    event.preventDefault()
    getMovies()
  }

  function handleChange (event) {
    setValue(event.target.value)
  }

  return (
    <>
      <div className='page'>
        <header className='header'>

          <h1>Movie Searcher</h1>

          <form className='form' onSubmit={handleSubmit}>

            <label className='label'>
                <p>Movie Name:</p>
                <input value={value} onChange={handleChange} type='text' placeholder='Avengers, Star Wars, ...'/>
            </label>
            
            <button type='submit' disabled={formError || value.length === 0}>
              Search
            </button>

          </form>
            {formError && <p style={{color:'red'}}>{formError}</p>}
        </header>

        <main>
          { 
            isLoading ? 
            <p>Loading Movies...</p> : 
            <ShowMovies mappedMovies={movie} />
          }
        </main>
      </div>
    </>
  )
}

export default App
