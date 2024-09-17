import React, { useEffect, useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          maxLength="100"
        />
      </div>
      <div>
        <label>Genre</label>
        <input type="text" name="genre" value={formData.genre} onChange={handleChange} required />
      </div>
      <div>
        <label>Release Year</label>
        <input
          type="number"
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
          required
          min="1900"
          max={new Date().getFullYear()}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          maxLength="1000"
        />
      </div>
      <div>
        <label>Poster URL</label>
        <input type="url" name="poster" value={formData.poster} onChange={handleChange} />
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default AddForm;
