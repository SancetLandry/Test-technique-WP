import './styles.scss';
import PropTypes from 'prop-types';
import MovieDetail from 'src/components/MainPage/MovieModal/MovieDetail';

import comeback from './comeback.png';

function MovieModale({ setIsMovieModalOpen, movieSelected }) {
  const handleClick = () => {
    setIsMovieModalOpen(false);
  };

  return (
    <div className="movie-modale">
      <div className="movie-modale__header">
        <button
          type="button"
          className="movie-modale__button"
          onClick={handleClick}
        >
          <img className="movie-modale__img" src={comeback} alt="" />
        </button>
        <p className="movie-modale__title">Detail</p>
      </div>
      <MovieDetail movieSelected={movieSelected} />
    </div>
  );
}

MovieModale.propTypes = {
  setIsMovieModalOpen: PropTypes.func.isRequired,
  movieSelected: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieModale;
