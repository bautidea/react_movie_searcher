const ShowMovies = ({ mappedMovies }) => {
  const hasMovies = mappedMovies?.length > 0

  return (
    <>
      {
        hasMovies 

        &&

        <ul>
          {
            mappedMovies.map((movie) => (
              <li key={movie.id}>
                <h2>{movie.title}</h2>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={`${movie.title} Poster`} />
              </li>
            ))
          }
        </ul>

        || 

        <h2>No Movies Found</h2>
      }
    </>
  );
};

export default ShowMovies;
