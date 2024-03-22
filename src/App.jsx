import { useState } from 'react'
import './App.css'

const apiKey = import.meta.env.VITE_API_KEY
const MOVIE_ENDPOINT_SEARCH = `http://www.omdbapi.com/?apikey=${apiKey}&`

function App() {
  // State to store movie name to search.
  const [ movieToSearch, setMovieToSearch ] = useState()

  useState( () => {
    if (!movieToSearch) return 

    fetch(`${MOVIE_ENDPOINT_SEARCH}t=${movieToSearch}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => console.log(data))
  }, [movieToSearch])

  const handleClick = () => {

  }

  return (
    <>
      <div className='page'>
        <header className='header'>

          <h1>Movie Searcher</h1>

          <form className='form'>

            <label className='label'>
                <p>Movie Name:</p>
                <input value={movieToSearch} type='text' placeholder='Avengers, Star Wars, ...'/>
            </label>

            <button type='submit' onClick={handleClick} >
              Search
            </button>

          </form>
        </header>

        <main>
          Resultados
        </main>
      </div>
    </>
  )
}

export default App
