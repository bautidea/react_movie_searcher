import './App.css'
import useMovies from './hooks/useMovies'
import ShowMovies from './components/ShowMovies'
import useForm from './hooks/useForm'
import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'

function App() {
  const [ sortTitle, setSortTitle ] = useState(false)
  const [ sortYear, setSortYear ] = useState(false)
  
  const { value, formError, setValue } = useForm()
  const { movie, isLoading,  getMovies } = useMovies({ value, sortTitle, sortYear })
  
  const debounceMovie = useCallback(
    debounce((search) => {
      getMovies({ search })
    },500)
    , [])

  // Handling form in a 'controlled' way, because React is controlling the state.
  // In this way its easier to perform form validation.
  function handleSubmit (event) {
    event.preventDefault()
    getMovies({ search : value })
  }

  function handleChange (event) {
    const newValue = event.target.value
    setValue(newValue)
    debounceMovie(newValue)
  }

  function handleSortTitle () {
    setSortTitle(!sortTitle)
  }

    function handleSortYear () {
      setSortYear(!sortYear)
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

            <div className='filterLabel'>
              <label className='label'>
                <input type='checkbox' checked={sortTitle} onChange={handleSortTitle}/>
                <p>Sort by title</p>
              </label>
              
              <label className='label'>
                <input type='checkbox' checked={sortYear} onChange={handleSortYear}/>
                <p>Sort by year </p>
              </label>
            </div>
            
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
