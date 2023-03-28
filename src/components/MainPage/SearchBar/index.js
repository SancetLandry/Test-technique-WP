import './styles.scss';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="   search"
      />
      <FaSearch className="search-icon" />
    </div>
  );
}

export default SearchBar;
