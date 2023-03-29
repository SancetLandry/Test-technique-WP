import './styles.scss';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import IfNoTyping from './IfNoTyping';
import IfNoResult from './IfNoResult';
import IfResult from './IfResult';

function SearchModale({ setIsSearchModalOpen, movies }) {
  const handleClick = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <div className="search-modale">
      <div className="search-modale__header">
        <button type="button" className="search-modale__button" onClick={handleClick}>&#60;</button>
        <p className="search-modale__title">Search</p>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="   search"
        />
        <FaSearch className="search-icon" />
      </div>
      <IfResult movies={movies} />
    </div>
  );
}

SearchModale.propTypes = {
  setIsSearchModalOpen: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SearchModale;
