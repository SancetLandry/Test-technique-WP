// == Import ==
import './styles.scss';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

// We use the SearchBar component to display the search bar
// and to open the modal when the user click on the search bar.
// We use the isSearchModalOpen state to check if the modal is open or not.
// If the modal is open, we don't display the search bar modal.
// If the modal is not open, we display the search bar modal.
function SearchBar({ setIsSearchModalOpen, isSearchModalOpen }) {
  const handleClick = () => {
    if (!isSearchModalOpen) {
      setIsSearchModalOpen(true);
    }
  };

  return (
    // We use the handleClick function to open the modal
    // when the user click on the search bar.
    // We use the FaSearch component from react-icons to display the search icon.
    // We use the handleClick function to open the modal
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

// == PropTypes ==
SearchBar.propTypes = {
  setIsSearchModalOpen: PropTypes.func.isRequired,
  isSearchModalOpen: PropTypes.bool.isRequired,
};

export default SearchBar;
