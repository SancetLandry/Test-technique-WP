import './styles.scss';
import Title from 'src/components/MainPage/Title';
import SearchBar from 'src/components/MainPage/SearchBar';
import MovieList from 'src/components/MainPage/MovieList';
import MovieGrid from 'src/components/MainPage/MovieGrid';

function MainPage() {
  return (
    <div className="mainpage">
      <Title />
      <SearchBar />
      <MovieList />
      <MovieGrid />
    </div>
  );
}

export default MainPage;
