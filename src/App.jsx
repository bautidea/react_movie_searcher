import './App.css'
import { useState } from 'react'
import useMovies from './hooks/useMovies'
import ShowMovies from './components/ShowMovies'

function App() {
  const { movie } = useMovies('Star')
  const [ value, setValue ] = useState('')

  // Handling form in a 'controlled' way, because React is controlling the state.
  // In this way its easier to perform form validation.
  function handleSubmit (event) {
    event.preventDefault()
    console.log({ value });
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
