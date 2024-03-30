const ShowMovies = ({ mappedMovies}) => {
  const hasMovies = mappedMovies?.length > 0

  const yearSortedMovies = mappedMovies.sort((a,b) => {
    if ( a.year > b.year ) return -1
    if ( a.year < b.year ) return 1
    return 0
  })

  return (
    <>
      {
        hasMovies 

        ?

        (
          <ul className='movieContainer'>
            {
              yearSortedMovies.map((movie) => (
                <li key={movie.id} className="movieItem">
                  <img src={movie.poster} alt={`${movie.title} Poster`} className="moviePoster"/>

                  <div className="movieInfo">
                    <h2>{movie.title}</h2>
                    <p>{movie.year}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        )

        :

          <h2>No Movies Found</h2>
      }
    </>
  );
};

export default ShowMovies;
