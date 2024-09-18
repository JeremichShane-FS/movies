import React from "react";
import "./MovieCard.scss";

const MovieCard = ({ title, genre, releaseYear, description, poster }) => {
  return (
    <article className="movie-card">
      <img src={poster} alt={`${title} poster`} className="movie-card__poster" />
      <div className="movie-card__details">
        <div className="movie-card__item">
          <dt className="movie-card__term visually-hidden">Title:</dt>
          <dd className="movie-card__title">{title}</dd>
        </div>
        <div className="movie-card__item">
          <dt className="movie-card__term visually-hidden">Release Year:</dt>
          <dd className="movie-card__release-year">{releaseYear}</dd>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
