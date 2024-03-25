const apiKey = import.meta.env.VITE_API_KEY
const MOVIE_ENDPOINT_SEARCH = `http://www.omdbapi.com/?apikey=${apiKey}&`

const searchMovie = async (movieName) => {
    const response = await fetch(`${MOVIE_ENDPOINT_SEARCH}s=${movieName}`)
    const data = await response.json()
    const moviesRes =  data.Search
    
    const mappedMovies = moviesRes?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    return mappedMovies
}

export default searchMovie