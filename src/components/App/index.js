// == Import
import { useEffect, useState } from 'react';
import './styles.scss';
import SplashScreen from 'src/components/SplashScreen';

// == Composant
function App() {
  // We use the useState hook to manage the display of the start screen.
  // We set a timer of 3 seconds thanks to the useEffect then we display
  // the rest of the application so here, the homepage.
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App">
      {showSplashScreen && <SplashScreen />}
      {/* homepage */}
    </div>
  );
}

// == Export
export default App;
