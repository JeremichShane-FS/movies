import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieCard } from "../../components";
import { MoviesContext } from "../../context/MoviesContext";
import "./Movies.scss";

const Movies = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <section className="movies">
      <h1 className="movies__title">Movies in database:</h1>
      <div className="movies__list">
        {movies.map(movie => (
          <Link to={`/movie/${movie._id}`} key={movie._id}>
            <MovieCard
              title={movie.title}
              genre={movie.genre}
              releaseYear={movie.releaseYear}
              description={movie.description}
              poster={movie.poster}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Movies;
