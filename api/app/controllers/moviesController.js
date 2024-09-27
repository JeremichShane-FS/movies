import { Movie } from "../models/Movies.js";

import { RESPONSE_MESSAGES as rm } from "../constants/responseMessages.js";

export const getAllMovies = async (req, res) => {
  let query = Object.create(null);
  try {
    const movies = await Movie.find(query);
    res.status(200).json({
      status: true,
      data: movies,
    });
  } catch (err) {
    return next(err);
  }
};

export const getMovieById = (req, res) => {
  res.status(200).json({ status: true, data: res.movie });
};

export const addMovie = async (req, res) => {
  const { title, genre, releaseYear, description, poster } = req.body;

  const movie = new Movie({
    title,
    genre,
    releaseYear,
    description,
    poster,
  });

  try {
    await movie.save();
    res.status(201).json({
      success: true,
      message: rm.RECORD_CREATED_SUCCESSFULLY(req).replace("Record", "Movie"),
      data: movie,
    });
  } catch (err) {
    return next(err);
  }
};

export const updateMovie = async (req, res) => {
  const { title, genre, releaseYear, description, poster } = req.body;
  const { id } = req.params;

  try {
    if (!res.movie) {
      return res.status(404).json({ status: false, message: rm.RECORD_NOT_FOUND(id) });
    }

    if (title) res.movie.title = title;
    if (genre) res.movie.genre = genre;
    if (releaseYear) res.movie.releaseYear = releaseYear;
    if (description) res.movie.description = description;
    if (poster) res.movie.poster = poster;

    const updatedMovie = await res.movie.save();
    res.status(200).json({
      status: true,
      message: rm.RECORD_UPDATED_SUCCESSFULLY(req, id).replace("Record", "Movie"),
      data: updatedMovie,
    });
  } catch (err) {
    return next(err);
  }
};

export const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    await res.movie.deleteOne();
    res.json({
      status: true,
      message: rm.RECORD_DELETED_SUCCESSFULLY(id).replace("Record", "Movie"),
    });
  } catch (err) {
    return next(err);
  }
};
