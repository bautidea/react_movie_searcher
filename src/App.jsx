import './App.css'
import useMovies from './hooks/useMovies'
import ShowMovies from './components/ShowMovies'

function App() {
  const { movie, updateMovie } = useMovies()
  console.log(movie);
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
          <ShowMovies mappedMovies={movie}/>
        </main>
      </div>
    </>
  )
}

export default App
