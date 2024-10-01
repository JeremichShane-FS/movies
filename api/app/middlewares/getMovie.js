import { Movie } from "../models/Movies.js";

import { RESPONSE_MESSAGES as rm } from "../constants/responseMessages.js";

export const getMovie = async (req, res, next) => {
  const { id } = req.params;
  let movie;

  try {
    movie = await Movie.findById(id);
    if (movie === null) {
      return res
        .status(404)
        .json({ status: false, message: rm.RECORD_NOT_FOUND(id).replace("Record", "Movie") });
    }
  } catch (err) {
    return next(err);
  }
  res.movie = movie;
  return next();
};
