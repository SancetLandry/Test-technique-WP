// MovieList.js
import './styles.scss';
import movie1 from './movie1.png';

function MovieList() {
  // Remplacez les URLs par les images de vos films
  const movieImages = [
    { movie1 },
    { movie1 },
    { movie1 },
    { movie1 },
  ];

  return (
    <div className="movie-list-container">
      <ul className="movie-list">
        {movieImages.map((image, index) => (
          <li key={index} className="movie-item">
            <p className="movie-number">{index + 1}</p>
            <img src={movie1} alt={`Movie ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
