import { useEffect, useState } from 'react'
import searchMovie from '../services/searchMovie'

const useMovies = (movieToSearch) => {
  const [ movieResult, setMovieResult ] = useState()

  useEffect(() => {
    if (!movieToSearch) return 

    searchMovie(movieToSearch).then(setMovieResult)
  }, [movieToSearch])

  return { movie : movieResult }
}

export default useMovies