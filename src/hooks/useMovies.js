import { useState, useRef, useMemo, useCallback } from 'react'
import searchMovie from '../services/searchMovie'
// useMemo -> is used when returning values.
// useCallback -> is used for returning functions.

const useMovies = ({ value, sortTitle, sortYear }) => {
  const [ movieResult, setMovieResult ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState(null)
  const previousMovie = useRef(value)

  // Using useCallback so this function dont get executed in every render.
  // useCallback is a hook that simplifies useMemo usage when returning functions.
  // useCallback is the same a useMemo, but its for functions (not for returning values).

  // Here i dont pass any dependencies because im just initializing the function.
  // This function will be executed every time it gets called in the 'App' component,
  // when submitting the form.
  const getMovies = useCallback(() => {
    async ({ search }) => {
  
      if ( search === previousMovie.current ) return

      try {
        previousMovie.current = search

        setIsLoading(true)
        setError(null)

        const newMovie = await searchMovie(search)
        setMovieResult(newMovie)

      } catch (e) {

        setError(e)

      } finally {
        setIsLoading(false)
      }
    }
  }, [])

  // With useMemo we are avoiding to render sortedMovies when the movieResult hasn't changed.
  // The sorting logic i want to executed only when dependencies change.
  // If these dependencies dont change then the execution of 'sortedMovies' wont go through.
  const sortedMovies = useMemo(() => {
      let sorted = [...movieResult]

      if ( sortTitle ) {
        sorted = sorted.sort(( a, b ) => a.title.localeCompare(b.title))
      }
    
      if ( sortYear ) {
        sorted = sorted.sort(( a, b ) => a.year - b.year)
      }

      return sorted
  }, [ sortTitle, sortYear, movieResult ])
  
  return { movie : sortedMovies, isLoading, getMovies }
}

export default useMovies