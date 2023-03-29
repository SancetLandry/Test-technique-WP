import './styles.scss';
import PropTypes from 'prop-types';
import Title from 'src/components/MainPage/Title';
import SearchBar from 'src/components/MainPage/SearchBar';
import MovieList from 'src/components/MainPage/MovieList';
import MovieGrid from 'src/components/MainPage/MovieGrid';

function MainPage(props) {
  const { movies } = props;

  return (
    <div className="mainpage">
      <Title />
      <SearchBar />
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
