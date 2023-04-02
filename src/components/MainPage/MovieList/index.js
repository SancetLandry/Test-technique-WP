// == Import ==
import './styles.scss';
import PropTypes from 'prop-types';

function MovieList({ movies, setIsMovieModalOpen, setMovieSelected }) {
  // We sort the movies by year
  const sortedMovies = movies.sort((a, b) => b.year - a.year);

  // We slice the array to get the 4 most recent movies
  const recentMovies = sortedMovies.slice(0, 4);

  // We use the handleModale function to open the modal
  // and to display the movie selected.
  // We use the find method to find the movie selected
  // and we pass it to the setMovieSelected function.
  function handleModale(event) {
    const movieSelected = event.target.src;
    const movieFound = movies.find((movie) => movie.thumbnail === movieSelected);
    setMovieSelected(movieFound);
    setIsMovieModalOpen(true);
  }

  return (
    // We display the 4 most recent movies
    <div className="movie-list-container">
      <ul className="movie-list">
        {recentMovies.map((movie, index) => (
          <li key={`Movie ${index + 1}`} className="movie-item" onClick={handleModale}>
            <p className="movie-number">{index + 1}</p>
            <img src={movie.thumbnail} alt={`Movie ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// == PropTypes ==
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setIsMovieModalOpen: PropTypes.func.isRequired,
  setMovieSelected: PropTypes.func.isRequired,
};

export default MovieList;
