import './styles.scss';
import movie1 from './movie1.png';

function MovieGrid() {
  // Remplacez les URLs par les images de vos films
  const movieImages = [
    { movie1 },
    { movie1 },
    { movie1 },
    { movie1 },
    { movie1 },
    { movie1 },
    { movie1 },
    { movie1 },
    { movie1 },
  ];

  return (
    <div className="movie-grid-container">
      {movieImages.map((image, index) => (
        <div key={index} className="movie-grid-item">
          <img src={movie1} alt={`Movie ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default MovieGrid;
