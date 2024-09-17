import "./MovieCard.scss";

const MovieCard = ({ title, genre, releaseYear, description, poster }) => {
  return (
    <li className="movie-card">
      <img src={poster} alt={`${title} poster`} className="movie-card__poster" />
      <div className="movie-card__content">
        <h2 className="movie-card__title">{title}</h2>
        <p className="movie-card__genre">{genre}</p>
        <p className="movie-card__release-year">{releaseYear}</p>
        <p className="movie-card__description">{description}</p>
      </div>
    </li>
  );
};

export default MovieCard;
