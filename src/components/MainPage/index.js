import './styles.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Title from 'src/components/MainPage/Title';
import SearchBar from 'src/components/MainPage/SearchBar';
import SearchModal from 'src/components/MainPage/SearchModal';
import MovieModal from 'src/components/MainPage/MovieModal';
import MovieList from 'src/components/MainPage/MovieList';
import MovieGrid from 'src/components/MainPage/MovieGrid';

function MainPage(props) {
  const { movies } = props;

  // Search mode management (open/closed)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState([]);

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
        setIsMovieModalOpen={setIsMovieModalOpen}
        setMovieSelected={setMovieSelected}
        movies={movies}
      />
      )}
      {isMovieModalOpen && (
      <MovieModal
        setIsMovieModalOpen={setIsMovieModalOpen}
        movies={movies}
        movieSelected={movieSelected}
      />
      )}
      <MovieList
        movies={movies}
        setIsMovieModalOpen={setIsMovieModalOpen}
        setMovieSelected={setMovieSelected}
      />
      <MovieGrid
        movies={movies}
        setIsMovieModalOpen={setIsMovieModalOpen}
        setMovieSelected={setMovieSelected}
      />
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
