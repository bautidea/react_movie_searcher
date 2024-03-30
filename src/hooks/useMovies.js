import { useState, useRef } from 'react'
import searchMovie from '../services/searchMovie'

const useMovies = ({ value, sortTitle, sortYear }) => {
  const [ movieResult, setMovieResult ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState(null)
  const previousMovie = useRef(value)

  const getMovies = async () => {
    if ( value === previousMovie.current ) return

    try {
      previousMovie.current = value

      setIsLoading(true)
      setError(null)

      const newMovie = await searchMovie(value)
      setMovieResult(newMovie)

    } catch (e) {

      setError(e)

    } finally {
      setIsLoading(false)
    }
  }

  let sortedMovies = [...movieResult]

  if ( sortTitle ) {
    sortedMovies.sort(( a, b ) => a.title.localeCompare(b.title))
  }

  if ( sortYear ) {
    sortedMovies.sort(( a, b ) => a.year - b.year)
  }
  
  return { movie : sortedMovies, isLoading, getMovies }
}

export default useMovies