import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components";
import { MoviesContext } from "../../context/MoviesContext";
import { AddMovieForm } from "../../pages/add-movie/AddMovieForm";

import API from "../../api";
import { DASHBOARD } from "../../constants/paths";
import { UserContext } from "../../context";
import "./MovieDetails.scss";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
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
    <section className="movie-details">
      <img src={movie.poster} alt={`${movie.title} poster`} className="movie-details__poster" />
      <div className="movie-details__content">
        <h1 className="movie-details__title">{movie.title}</h1>
        <dl className="movie-details__list">
          <div className="movie-details__item">
            <dt className="movie-details__term visually-hidden">Genre:</dt>
            <dd className="movie-details__description">{movie.genre}</dd>
          </div>
          <div className="movie-details__item">
            <dt className="movie-details__term visually-hidden">Release Year:</dt>
            <dd className="movie-details__description">{movie.releaseYear}</dd>
          </div>
          <div className="movie-details__item">
            <dt className="movie-details__term visually-hidden">Description:</dt>
            <dd className="movie-details__description">{movie.description}</dd>
          </div>
        </dl>
        <div className="movie-details__actions">
          {currentUser && (
            <>
              <Button onClick={handleDelete} className="button">
                Delete Movie
              </Button>
              {isEditing ? (
                <button onClick={handleCancel} className="button button--cancel">
                  Cancel
                </button>
              ) : (
                <Button onClick={handleEdit} className="button">
                  Edit Movie
                </Button>
              )}
            </>
          )}
        </div>
        {isEditing && (
          <AddMovieForm initialData={movie} onSubmit={handleSubmit} buttonText="Save Changes" />
        )}
      </div>
    </section>
  );
};

export default MovieDetails;
