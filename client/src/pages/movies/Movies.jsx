import { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieCard } from "../../components";
import { MoviesContext } from "../../context/MoviesContext";

import { MOVIE } from "../../constants/paths";
import { sortMoviesByYearAndTitle } from "../../utils/sortMoviesByYearAndTitle";
import "./Movies.scss";

const Movies = () => {
  const { movies, loading, error } = useContext(MoviesContext);
  const sortedMovies = sortMoviesByYearAndTitle(movies);

  return (
    <section className="movies">
      <h1 className="movies__title">Movies in database:</h1>
      <div className="movies__list">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          sortedMovies.map(movie => (
            <Link to={MOVIE(movie._id)} key={movie._id}>
              <MovieCard
                title={movie.title}
                genre={movie.genre}
                releaseYear={movie.releaseYear}
                description={movie.description}
                poster={movie.poster}
              />
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default Movies;
