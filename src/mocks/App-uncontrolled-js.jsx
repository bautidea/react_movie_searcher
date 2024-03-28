import './App.css'
import useMovies from './hooks/useMovies'
import ShowMovies from './components/ShowMovies'

function App() {
  const { movie } = useMovies('Star')

  // Retrieving input data using JS --> This would be called 'uncontrolled' way.
  function handleSubmit (event) {
    // Function to recover movie to search written in input field.
    event.preventDefault()
    // Retrieving data from form, this can be done two ways.
    
    // 1- retrieving a single value.
    //* const field = new window.FormData(event.target)
    //* const value = field.get('movieInput') // --> value
    
    // 2- Retrieving an object with all inputs values (suppose in a form there are multiple inputs
    const value = Object.fromEntries(new window.FormData(event.target)) // --> { movieInput : value}
    console.log(value);
  }

  return (
    <>
      <div className='page'>
        <header className='header'>

          <h1>Movie Searcher</h1>

          <form className='form' onSubmit={handleSubmit}>

            <label className='label'>
                <p>Movie Name:</p>
                <input name='movieInput' type='text' placeholder='Avengers, Star Wars, ...'/>
            </label>

            <button type='submit'>
              Search
            </button>

          </form>
        </header>

        <main>
          <ShowMovies mappedMovies={movie}/>
        </main>
      </div>
    </>
  )
}

export default App