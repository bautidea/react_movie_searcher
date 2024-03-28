import PropTypes from 'prop-types';

const ShowMovies = ({ mappedMovies }) => {
  const hasMovies = mappedMovies?.length > 0

  return (
    <>
      {
        hasMovies 

        ?

        (
          <ul className='movieContainer'>
            {
              mappedMovies.map((movie) => (
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

        (
          <h2>No Movies Found</h2>
        )
      }
    </>
  );
};

ShowMovies.propTypes = {
  mappedMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    })
  ),
};

export default ShowMovies;
