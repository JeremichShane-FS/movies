import express from "express";
import authRouter from "./authRouter.js";
import moviesRouter from "./moviesRouter.js";

const router = express.Router();

router.use("/movies", moviesRouter);
router.use("/auth", authRouter);

export default router;
