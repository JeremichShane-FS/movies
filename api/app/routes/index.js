import express from "express";
import moviesRouter from "./moviesRouter.js";
import userRouter from "./userRouter.js";

const router = express.Router();

router.use("/movies", moviesRouter);
router.use("/user", userRouter);

export default router;
