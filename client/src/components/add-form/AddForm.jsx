import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import "./AddForm.scss";

const AddForm = ({ initialData, onSubmit, buttonText }) => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    releaseYear: "",
    description: "",
    poster: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <div className="add-form__group">
        <label htmlFor="title" className="add-form__label">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          maxLength="100"
          className="add-form__input"
        />
      </div>
      <div className="add-form__group">
        <label htmlFor="genre" className="add-form__label">
          Genre
        </label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
          className="add-form__input"
        />
      </div>
      <div className="add-form__group">
        <label htmlFor="releaseYear" className="add-form__label">
          Release Year
        </label>
        <input
          type="number"
          id="releaseYear"
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
          required
          min="1900"
          max={new Date().getFullYear()}
          className="add-form__input"
        />
      </div>
      <div className="add-form__group">
        <label htmlFor="description" className="add-form__label">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          maxLength="1000"
          className="add-form__textarea"
        />
      </div>
      <div className="add-form__group">
        <label htmlFor="poster" className="add-form__label">
          Poster URL
        </label>
        <input
          type="url"
          id="poster"
          name="poster"
          value={formData.poster}
          onChange={handleChange}
          className="add-form__input"
        />
      </div>
      <Button type="submit" className="button">
        {buttonText}
      </Button>
    </form>
  );
};

export default AddForm;
