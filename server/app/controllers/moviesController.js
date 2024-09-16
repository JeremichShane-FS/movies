import { Movie } from "../models/Movies.js";

export const getAllMovies = async (req, res) => {
  let query = Object.create(null);
  try {
    const movies = await Movie.find(query);
    res.status(200).json({
      status: true,
      data: movies,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      Error: err.message,
    });
  }
};

export const getMovieById = (req, res) => {
  res.status(200).json({ status: true, data: res.movie });
};

export const createMovie = async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    genre: req.body.genre,
    releaseYear: req.body.releaseYear,
    description: req.body.description,
    poster: req.body.poster,
  });

  try {
    await movie.save();
    res.status(201).json({ success: true, data: movie });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

export const updateMovie = async (req, res) => {
  const { title, genre, releaseYear, description, poster } = req.body;

  try {
    if (!res.movie) {
      return res.status(404).json({ status: false, message: "Movie not found" });
    }

    if (title) res.movie.title = title;
    if (genre) res.movie.genre = genre;
    if (releaseYear) res.movie.releaseYear = releaseYear;
    if (description) res.movie.description = description;
    if (poster) res.movie.poster = poster;

    const updatedMovie = await res.movie.save();
    res.status(200).json({ status: true, data: updatedMovie });
  } catch (err) {
    res.status(400).json({ status: false, message: err.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    await res.movie.deleteOne();
    res.json({ status: true, message: "Removed movie successfully!" });
  } catch (err) {
    res.status(500).json({
      status: false,
      Error: err.message,
    });
  }
};
