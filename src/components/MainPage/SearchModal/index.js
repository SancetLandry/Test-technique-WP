// == Import ==
import './styles.scss';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import comeback from './comeback.png';
import IfNoTyping from './IfNoTyping';
import IfNoResult from './IfNoResult';
import IfResult from './IfResult';

function SearchModale({
  setIsSearchModalOpen, setIsMovieModalOpen, movies, setMovieSelected,
}) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchState, setSearchState] = React.useState('noTyping');

  // We use the searchMovies function to filter the movies
  const searchMovies = (
    smovies,
    term,
  ) => smovies.filter((movie) => movie.title.toLowerCase().includes(term.toLowerCase()));

  const filteredMovies = searchMovies(movies, searchTerm);

  // We use the handleSearch function to check if the user is typing or not.
  // If the user is typing, we display the result.
  // If the user is not typing, we display the message "No typing".
  // If the user is typing but there is no result, we display the message "No result".
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

    if (event.target.value === '') {
      setSearchState('noTyping');
    }
    else if (filteredMovies.length === 0) {
      setSearchState('noResult');
    }
    else {
      setSearchState('result');
    }
  };

  const handleClick = () => {
    setIsSearchModalOpen(false);
  };

  return (
    // We use the handleClick function to close the modal
    // when the user click on the comeback button.
    <div className="search-modale">
      <div className="search-modale__header">
        <button
          type="button"
          className="search-modale__button"
          onClick={handleClick}
        >
          <img className="search-modale__img" src={comeback} alt="" />
        </button>
        <p className="search-modale__title">Search</p>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="   search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch className="search-icon" />
      </div>
      {searchState === 'noTyping' && <IfNoTyping />}
      {searchState === 'noResult' && <IfNoResult />}
      {searchState === 'result' && <IfResult filteredMovies={filteredMovies} setIsMovieModalOpen={setIsMovieModalOpen} setMovieSelected={setMovieSelected} movies={movies} />}
    </div>
  );
}

// == PropTypes ==
SearchModale.propTypes = {
  setIsSearchModalOpen: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setIsMovieModalOpen: PropTypes.func.isRequired,
  setMovieSelected: PropTypes.func.isRequired,
};

export default SearchModale;
