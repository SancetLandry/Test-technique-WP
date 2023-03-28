import './styles.scss';
import splashscreenimg from './popcorn.png';

// This component allows to display the splash screen in the middle of
// the screen thanks to the import of the png image.

function SplashScreen() {
  return (
    <div className="splash-screen">
      <img className="splash-screen__img" src={splashscreenimg} alt="splashscreen img" />
    </div>
  );
}

export default SplashScreen;
