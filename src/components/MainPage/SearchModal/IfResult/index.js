import './styles.scss';
import PropTypes from 'prop-types';

import dateImg from './date.png';
import typeImg from './type.png';
import durationImg from './duration.png';

function IfResult({
  filteredMovies, setIsMovieModalOpen, movies, setMovieSelected,
}) {
  function handleModale(event) {
    const movieItem = event.currentTarget;
    const movieImg = movieItem.querySelector('img');
    const movieSelectedSrc = movieImg.src;

    const movieFound = movies.find((movie) => movie.thumbnail === movieSelectedSrc);
    setMovieSelected(movieFound);
    setIsMovieModalOpen(true);
  }

  return (
    <div className="ifResult">
      {filteredMovies.map((element) => (
        <div key={element.title} className="ifResult__container" onClick={handleModale}>
          <img className="ifResult__thumbnail" src={element.thumbnail} alt="" />
          <div className="ifResult__rightText">
            <h1 className="ifResult__rightText__h1">{element.title}</h1>
            <div className="ifResult__rightText__iconText__container">
              <div className="ifResult__rightText__iconText">
                <img className="ifResult__rightText__icon" src={dateImg} alt="date icon" />
                <p className="ifResult__rightText__p">{element.date}</p>
              </div>
              <div className="ifResult__rightText__iconText">
                <img className="ifResult__rightText__icon" src={typeImg} alt="type icon" />
                <p className="ifResult__rightText__p">{element.type}</p>
              </div>
              <div className="ifResult__rightText__iconText">
                <img className="ifResult__rightText__icon" src={durationImg} alt="duration icon" />
                <p className="ifResult__rightText__p">{element.duration} minutes</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

IfResult.propTypes = {
  filteredMovies: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setMovieSelected: PropTypes.func.isRequired,
  setIsMovieModalOpen: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default IfResult;
