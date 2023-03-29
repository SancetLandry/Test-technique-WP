import './styles.scss';
import PropTypes from 'prop-types';

import dateImg from './date.png';
import typeImg from './type.png';
import durationImg from './duration.png';

function IfResult({ movies }) {
  return (
    <div className="ifResult">
      <div className="ifResult__container">
        <img className="ifResult__thumbnail" src={movies[1].thumbnail} alt="" />
        <div className="ifResult__rightText">
          <h1 className="ifResult__rightText__h1">{movies[1].title}</h1>
          <div className="ifResult__rightText__iconText__container">
            <div className="ifResult__rightText__iconText">
              <img className="ifResult__rightText__icon" src={dateImg} alt="date icon" />
              <p className="ifResult__rightText__p">{movies[1].date}</p>
            </div>
            <div className="ifResult__rightText__iconText">
              <img className="ifResult__rightText__icon" src={typeImg} alt="type icon" />
              <p className="ifResult__rightText__p">{movies[1].type}</p>
            </div>
            <div className="ifResult__rightText__iconText">
              <img className="ifResult__rightText__icon" src={durationImg} alt="duration icon" />
              <p className="ifResult__rightText__p">{movies[1].duration} minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IfResult;
