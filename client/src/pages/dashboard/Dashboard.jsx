import { useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../context/MoviesContext";

import { ADD_MOVIE, ROOT } from "../../constants/paths";
import "./Dashboard.scss";

const Dashboard = () => {
  const { movies, loading, error } = useContext(MoviesContext);

  return (
    <section className="dashboard">
      <header className="dashboard__header">
        <div className="dashboard__title-container">
          <h1 className="dashboard__title">Movies Dashboard</h1>
          <h2 className="dashboard__subtitle">Click on movie to edit</h2>
        </div>
        <nav className="dashboard__nav">
          <Link to={ROOT} className="dashboard__link">
            Home
          </Link>
          <Link to={ADD_MOVIE} className="dashboard__link">
            <button className="dashboard__button">Add Movie</button>
          </Link>
        </nav>
      </header>
      <main className="dashboard__main">
        {loading ? (
          <p className="dashboard__loading">Loading...</p>
        ) : error ? (
          <p className="dashboard__error">{error}</p>
        ) : (
          <ul className="dashboard__list">
            {movies.map(movie => (
              <li key={movie._id} className="dashboard__list-item">
                <Link to={`/movie/${movie._id}`} className="dashboard__movie-link">
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

export default Dashboard;
