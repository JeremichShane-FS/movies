import express from "express";
import moviesRoutes from "./moviesRoutes.js";

const router = express.Router();

router.use("/movies", moviesRoutes);

export default router;
