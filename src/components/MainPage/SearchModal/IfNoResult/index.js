import './styles.scss';
import searchImg from './search.png';

function IfNoTyping() {
  return (
    <div className="IfNoTyping">
      <img className="IfNoTyping__img" src={searchImg} alt="search img png" />
      <h1 className="IfNoTyping__h1">We Are Sorry, We Can <br /> Not Find The Movie :|</h1>
      <p className="IfNoTyping__p">Find your movie by title</p>
    </div>
  );
}

export default IfNoTyping;
