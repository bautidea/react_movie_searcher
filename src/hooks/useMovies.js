import { useState, useRef } from 'react'
import searchMovie from '../services/searchMovie'

const useMovies = ({ value }) => {
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

  return { movie : movieResult, isLoading, getMovies }
}

export default useMovies