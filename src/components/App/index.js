// == Import
import { useEffect, useState } from 'react';
import './styles.scss';
import axios from 'axios';
import SplashScreen from 'src/components/SplashScreen';
import MainPage from 'src/components/MainPage';

// == Component
function App() {
  // We use the useState hook to manage the display of the start screen.
  // We set a timer of 3 seconds thanks to the useEffect then we display
  // the rest of the application so here, the homepage.
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // We declare a new state to store the data
  // retrieved during my API call with axios just below.
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const apiUrl = 'https://europe-west1-movie-api-recruitment.cloudfunctions.net/movies';
        const response = await axios.get(proxyUrl + apiUrl);
        setMovies(response.data);
        console.log(response.data);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {showSplashScreen && <SplashScreen />}
      <MainPage movies={movies} />
    </div>
  );
}

// == Export
export default App;
