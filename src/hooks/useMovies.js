import { useEffect, useState } from 'react'
import searchMovie from '../services/searchMovie'

const useMovies = () => {
  const [ movieToSearch, setMovieToSearch] = useState('Star')
  const [ movieResult, setMovieResult ] = useState()

  const updateMovie = ( newMovie ) => {
    setMovieToSearch((prevMovie) => newMovie)
  }

  useEffect(() => {
    if (!movieToSearch) return 

    searchMovie(movieToSearch).then(setMovieResult)
  }, [movieToSearch])

  return { movie : movieResult,  updateMovie}
}

export default useMovies