import { Movie } from "../models/Movies.js";

export const getMovie = async (req, res, next) => {
  let movie;

  try {
    movie = await Movie.findById(req.params.id);
    if (movie === null) {
      return res.status(404).json({ status: false, message: "Movie not found" });
    }
  } catch (err) {
    return res.status(500).json({ status: false, Error: err.message });
  }
  res.movie = movie;
  next();
};
