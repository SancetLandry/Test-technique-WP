import './styles.scss';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ setIsSearchModalOpen, isSearchModalOpen }) {
  const handleClick = () => {
    if (!isSearchModalOpen) {
      setIsSearchModalOpen(true);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="   search"
        onClick={handleClick}
      />
      <FaSearch className="search-icon" onClick={handleClick} />
    </div>
  );
}

SearchBar.propTypes = {
  setIsSearchModalOpen: PropTypes.func.isRequired,
  isSearchModalOpen: PropTypes.bool.isRequired,
};

export default SearchBar;
