import { useState } from 'react'
import './App.css'
import movieResponse from './mocks/response.json' // --> https://www.omdbapi.com/?apiKey={apiKey}&s=Star
import movieNoResponse from './mocks/no-response.json'

const apiKey = import.meta.env.VITE_API_KEY
const MOVIE_ENDPOINT_SEARCH = `http://www.omdbapi.com/?apikey=${apiKey}&`

function App() {
  const moviesRes = movieResponse.Search
  const hasMovies = moviesRes.length > 0

  return (
    <>
      <div className='page'>
        <header className='header'>

          <h1>Movie Searcher</h1>

          <form className='form'>

            <label className='label'>
                <p>Movie Name:</p>
                <input type='text' placeholder='Avengers, Star Wars, ...'/>
            </label>

            <button type='submit'>
              Search
            </button>

          </form>
        </header>

        <main>
          {
            hasMovies && 

            <ul>
              {moviesRes.map((movie) => (
                <li key={movie.imdbID}>
                  <img src={movie.Poster} alt={`${movie.Title} Poster`}/>
                  <p>{movie.Title}</p>
                </li>
                ))
              }
            </ul>
          }
        </main>
      </div>
    </>
  )
}

export default App
