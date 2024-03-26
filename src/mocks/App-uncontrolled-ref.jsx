import './App.css'
import { useRef } from 'react'
import useMovies from './hooks/useMovies'
import ShowMovies from './components/ShowMovies'

function App() {
  const { movie } = useMovies('Star')

  // Retrieving input using a useRef hook --> This would be called 'uncontrolled' way.
  const inputRef = useRef()

  function handleSubmit (event) {
    // Using JS to retrieve value on useRef.
    event.preventDefault()
    const value = inputRef.current.value
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
                <input ref={inputRef} type='text' placeholder='Avengers, Star Wars, ...'/>
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