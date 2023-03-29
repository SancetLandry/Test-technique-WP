import './styles.scss';
import PropTypes from 'prop-types';

import dateImg from './date.png';
import typeImg from './type.png';
import durationImg from './duration.png';

function IfResult({ filteredMovies }) {
  return (
    <div className="ifResult">
      {filteredMovies.map((element) => (
        <div key={element.id} className="ifResult__container">
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
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default IfResult;
