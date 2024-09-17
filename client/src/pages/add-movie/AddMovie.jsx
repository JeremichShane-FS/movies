import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import { AddForm } from "../../components";
import { DASHBOARD } from "../../constants/paths";

const AddMovie = () => {
  const navigate = useNavigate();

  const handleSubmit = async formData => {
    try {
      await API.addMovie(formData);
      navigate(DASHBOARD);
    } catch (error) {
      console.error("Failed to add movie:", error);
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
