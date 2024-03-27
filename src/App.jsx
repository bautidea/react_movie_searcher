import './App.css'
import useMovies from './hooks/useMovies'
import ShowMovies from './components/ShowMovies'
import useForm from './hooks/useForm'

function App() {
  const  { value, error, setValue, setFocused } = useForm()
  const { movie } = useMovies(value)

  // Handling form in a 'controlled' way, because React is controlling the state.
  // In this way its easier to perform form validation.
  function handleSubmit (event) {
    event.preventDefault()
    console.log({ value });
  }

  function handleChange (event) {
    setValue(event.target.value)
  }

  function onFocus () {
    setFocused(true)
  }

  function onBlur () {
    setFocused(false)
  }

  return (
    <>
      <div className='page'>
        <header className='header'>

          <h1>Movie Searcher</h1>

          <form className='form' onSubmit={handleSubmit}>

            <label className='label'>
                <p>Movie Name:</p>
                <input value={value} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} type='text' placeholder='Avengers, Star Wars, ...'/>
            </label>
            
            <button type='submit' disabled={error !== null || value.length === 0}>
              Search
            </button>

          </form>
            {error && <p style={{color:'red'}}>{error}</p>}
        </header>

        <main>
          <ShowMovies mappedMovies={movie}/>
        </main>
      </div>
    </>
  )
}

export default App
