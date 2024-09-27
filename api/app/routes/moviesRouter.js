import express from "express";
import {
  addMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
} from "../controllers/moviesController.js";
import { getMovie } from "../middlewares/getMovie.js";

const router = express.Router();

router.get("/", getAllMovies);
router.get("/:id", getMovie, getMovieById);
router.post("/", addMovie);
router.put("/:id", getMovie, updateMovie);
router.delete("/:id", getMovie, deleteMovie);

export default router;
