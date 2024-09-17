import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import API from "../../api";
import { AddForm } from "../../components"; // Updated import
import { DASHBOARD } from "../../constants/paths";
import { MoviesContext } from "../../context/MoviesContext";

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
    } catch (error) {
      console.error("Failed to update movie:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await API.deleteMovie(id);
      setMovies(prevState => prevState.filter(movie => movie._id !== id));
      navigate(DASHBOARD);
    } catch (error) {
      console.error("Failed to delete movie:", error);
    }
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <button onClick={handleDelete}>Delete Movie</button>
      <button onClick={handleEdit}>Edit Movie</button>
      <Link to={DASHBOARD}>Back to Dashboard</Link>

      {isEditing && (
        <AddForm initialData={movie} onSubmit={handleSubmit} buttonText="Save Changes" />
      )}
    </div>
  );
};

export default MovieDetails;
