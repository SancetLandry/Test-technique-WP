import './styles.scss';
import searchImg from './search.png';

function IfNoTyping() {
  return (
    // We use the IfNoTyping component to display the message "No typing"
    <div className="IfNoTyping">
      <img className="IfNoTyping__img" src={searchImg} alt="search img png" />
      <h1 className="IfNoTyping__h1">Start Typing To Find A <br /> Movie!</h1>
      <p className="IfNoTyping__p">Find your movie by title</p>
    </div>
  );
}

export default IfNoTyping;
