import { useContext } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../api/withAuth";
import { MoviesContext, UserContext } from "../../context";

import { Button } from "../../components";
import { ADD_MOVIE, MOVIE, ROOT } from "../../constants/paths";
import { sortMoviesByYearAndTitle } from "../../utils/sortMoviesByYearAndTitle";
import "./Dashboard.scss";

const Dashboard = () => {
  const { movies, loading, error } = useContext(MoviesContext);
  const { currentUser } = useContext(UserContext);
  const sortedMovies = sortMoviesByYearAndTitle(movies);
  const getUsername = email => {
    return email ? email.split("@")[0] : "User";
  };
  const username = getUsername(currentUser?.user.email);

  return (
    <section className="dashboard">
      <header className="dashboard__header">
        <div className="dashboard__title-container">
          <h1 className="dashboard__title">Movies Dashboard</h1>
          <h2 className="dashboard__subtitle">Click on movie to edit</h2>
        </div>
        <div className="dashboard__welcome">
          <h2>Welcome, {username}</h2>
        </div>
        <nav className="dashboard__nav">
          <Link to={ROOT} className="dashboard__link">
            Home
          </Link>
          <Link to={ADD_MOVIE} className="dashboard__link">
            <Button className="dashboard__button">Add Movie</Button>
          </Link>
        </nav>
      </header>
      <main className="dashboard__main">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <ul className="dashboard__list">
            {sortedMovies.map(movie => (
              <li key={movie._id} className="dashboard__list-item">
                <Link to={MOVIE(movie._id)} className="dashboard__movie-link">
                  <img src={movie.poster} alt={movie.title} className="dashboard__movie-poster" />
                  <div className="dashboard__movie-info">
                    <h3 className="dashboard__movie-title">{movie.title}</h3>
                    <p className="dashboard__movie-year">{movie.releaseYear}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </section>
  );
};

export default withAuth(Dashboard);
