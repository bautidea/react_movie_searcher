import { useState, useRef } from 'react'
import searchMovie from '../services/searchMovie'

const useMovies = ({ value, sortMovies }) => {
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

  const sortedMovies = sortMovies ? [...movieResult].sort(( a, b ) => a.title.localeCompare(b.title)) : [...movieResult]

  return { movie : sortedMovies, isLoading, getMovies }
}

export default useMovies