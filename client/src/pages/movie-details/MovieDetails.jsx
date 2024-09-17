import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AddForm } from "../../components";
import { MoviesContext } from "../../context/MoviesContext";

import API from "../../api";
import { DASHBOARD } from "../../constants/paths";
import "./MovieDetails.scss";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies, setMovies } = useContext(MoviesContext);
  const [movie, setMovie] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const selectedMovie = movies.find(movie => movie._id === id);
    setMovie(selectedMovie);
  }, [id, movies]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSubmit = async formData => {
    try {
      await API.updateMovie(id, formData);
      setMovies(prevState =>
        prevState.map(movie => (movie._id === id ? { ...movie, ...formData } : movie))
      );
      setIsEditing(false);
    } catch (err) {
      console.error("Failed to update movie:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await API.deleteMovie(id);
      setMovies(prevState => prevState.filter(movie => movie._id !== id));
      navigate(DASHBOARD);
    } catch (err) {
      console.error("Failed to delete movie:", err);
    }
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-details">
      <img src={movie.poster} alt={`${movie.title} poster`} className="movie-details__poster" />
      <div className="movie-details__content">
        <h1 className="movie-details__title">{movie.title}</h1>
        <p className="movie-details__genre">{movie.genre}</p>
        <p className="movie-details__release-year">{movie.releaseYear}</p>
        <p className="movie-details__description">{movie.description}</p>
        <div className="movie-details__actions">
          <button onClick={handleDelete} className="movie-details__button">
            Delete Movie
          </button>
          {isEditing ? (
            <button
              onClick={handleCancel}
              className="movie-details__button movie-details__button--cancel">
              Cancel
            </button>
          ) : (
            <button onClick={handleEdit} className="movie-details__button">
              Edit Movie
            </button>
          )}
          <Link to={DASHBOARD} className="movie-details__link">
            Back to Dashboard
          </Link>
        </div>
        {isEditing && (
          <AddForm initialData={movie} onSubmit={handleSubmit} buttonText="Save Changes" />
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
