import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AddForm } from "../../components";
import { MoviesContext } from "../../context/MoviesContext";

import API from "../../api";
import { DASHBOARD } from "../../constants/paths";

const AddMovie = () => {
  const navigate = useNavigate();
  const { refreshMovies } = useContext(MoviesContext);

  const handleSubmit = async formData => {
    try {
      await API.addMovie(formData);
      refreshMovies();
      navigate(DASHBOARD);
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <h1>Add Movie</h1>
      <AddForm initialData={null} onSubmit={handleSubmit} buttonText="Add Movie" />
    </div>
  );
};

export default AddMovie;
