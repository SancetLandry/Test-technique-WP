// == Import ==
import { useEffect, useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

function MovieGrid({ movies, setIsMovieModalOpen, setMovieSelected }) {
  // We sort the movies by year
  const sortedMovies = movies.sort((a, b) => b.year - a.year);

  // We slice the array to get the 4 most recent movies
  const otherMovies = sortedMovies.slice(4);

  return (
    // We pass the other movies to the ValidThumbnail component
    // to check if the image is valid or not.
    // If the image is not valid, we don't display it.
    <div className="movie-grid-container">
      {otherMovies.map((movie, index) => (
        <ValidThumbnail
          key={`Movie ${index + 1}`}
          movie={movie}
          movies={movies}
          index={index}
          setIsMovieModalOpen={setIsMovieModalOpen}
          setMovieSelected={setMovieSelected}
        />
      ))}
    </div>
  );
}

function ValidThumbnail({
  movie, movies, index, setIsMovieModalOpen, setMovieSelected,
}) {
  const [validImage, setValidImage] = useState(false);

  // We use the useEffect hook to check if the image is valid or not.
  // If the image is valid, we set the state to true.
  // If the image is not valid, we set the state to false.
  // If the state is false, we don't display the image.

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setValidImage(true);
    };
    img.onerror = () => {
      setValidImage(false);
    };
    img.src = movie.thumbnail;
  }, [movie.thumbnail]);

  if (!validImage) {
    return null;
  }

  // We use the handleModale function to open the modal
  // and to display the movie selected.
  function handleModale(event) {
    const movieSelected = event.target.src;
    const movieFound = movies.find((moviess) => moviess.thumbnail === movieSelected);
    setMovieSelected(movieFound);
    setIsMovieModalOpen(true);
  }

  return (
    <div className="movie-grid-item">
      <img src={movie.thumbnail} alt={`Movie ${index + 1}`} onClick={handleModale} />
    </div>
  );
}

// == PropTypes ==
MovieGrid.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setIsMovieModalOpen: PropTypes.func.isRequired,
  setMovieSelected: PropTypes.func.isRequired,
};

ValidThumbnail.propTypes = {
  movie: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  setIsMovieModalOpen: PropTypes.func.isRequired,
  setMovieSelected: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieGrid;
