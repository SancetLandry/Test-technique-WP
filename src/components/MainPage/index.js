import './styles.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Title from 'src/components/MainPage/Title';
import SearchBar from 'src/components/MainPage/SearchBar';
import SearchModal from 'src/components/MainPage/SearchModal';
import MovieList from 'src/components/MainPage/MovieList';
import MovieGrid from 'src/components/MainPage/MovieGrid';

function MainPage(props) {
  const { movies } = props;

  // Search mode management (open/closed)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <div className="mainpage">
      <Title />
      <SearchBar
        setIsSearchModalOpen={setIsSearchModalOpen}
        isSearchModalOpen={isSearchModalOpen}
      />
      {isSearchModalOpen && (
      <SearchModal
        setIsSearchModalOpen={setIsSearchModalOpen}
        movies={movies}
      />
      )}
      <MovieList movies={movies} />
      <MovieGrid movies={movies} />
    </div>
  );
}

MainPage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MainPage;
