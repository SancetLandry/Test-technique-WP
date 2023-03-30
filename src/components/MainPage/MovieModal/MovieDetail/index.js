import './styles.scss';

import PropTypes from 'prop-types';
import type from './type.png';
import date from './date.png';
import duration from './duration.png';

function MovieDetail({ movieSelected }) {
  if (!movieSelected) {
    return <div>Loading...</div>;
  }

  return (
    <div className="MovieDetail">

      <img className="MovieDetail__cover" src={movieSelected.cover} alt="cover" />
      <img className="MovieDetail__thumbnail" src={movieSelected.thumbnail} alt="thumbnail" />

      <h1 className="MovieDetail__h1">{movieSelected.title}</h1>

      <div className="MovieDetail__container">
        <div className="MovieDetail__container__children">
          <img className="MovieDetail__container__children__icon" src={date} alt="" />
          <p className="MovieDetail__container__children__iconText"> {movieSelected.date}</p>
          <p className="MovieDetail__container__children__iconText">|</p>
        </div>

        <div className="MovieDetail__container__children">
          <img className="MovieDetail__container__children__icon" src={duration} alt="" />
          <p className="MovieDetail__container__children__iconText">{movieSelected.duration} minutes</p>
          <p className="MovieDetail__container__children__iconText">|</p>
        </div>

        <div className="MovieDetail__container__children">
          <img className="MovieDetail__container__children__icon" src={type} alt="" />
          <p className="MovieDetail__container__children__iconText">{movieSelected.type}</p>
        </div>
      </div>

      <div className="MovieDetail__aboutcontainer">
        <h2 className="MovieDetail__aboutcontainer__h2">About Movie</h2>
        <div className="MovieDetail__aboutcontainer__line" />
        <p className="MovieDetail__aboutcontainer__p">{movieSelected.description}
        </p>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
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

export default MovieDetail;
