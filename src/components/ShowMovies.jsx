const ShowMovies = ({ mappedMovies }) => {
  const hasMovies = mappedMovies?.length > 0

  return (
    <>
      {
        hasMovies 

        &&

        <ul className='movieContainer'>
          {
            mappedMovies.map((movie) => (
              <li key={movie.id} className="movieItem">
                <div className="movieInfo">
                  <h2>{movie.title}</h2>
                  <p>{movie.year}</p>
                </div>

                <img src={movie.poster} alt={`${movie.title} Poster`} className="moviePoster"/>
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
