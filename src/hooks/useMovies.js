import { useEffect, useState } from 'react'
import searchMovie from '../services/searchMovie'

const useMovies = () => {
  const [ movieToSearch, setMovieToSearch ] = useState('')
  const [ movieResult, setMovieResult ] = useState()

  useEffect(() => {
    if (!movieToSearch) return 

    searchMovie(movieToSearch).then(setMovieResult)
  }, [movieToSearch])

  return { movie : movieResult, setMovieToSearch }
}

export default useMovies