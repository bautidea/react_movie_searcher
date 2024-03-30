const apiKey = import.meta.env.VITE_API_KEY;
const MOVIE_ENDPOINT_SEARCH = `http://www.omdbapi.com/?apikey=${apiKey}&`;

const searchMovie = async (movieName) => {
  try {
    const response = await fetch(`${MOVIE_ENDPOINT_SEARCH}s=${movieName}`);
    const data = await response.json();
    const moviesRes = data.Search;

    return moviesRes?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (e) {
    throw new Error('Error searching movie title');
  }
};

export default searchMovie;
