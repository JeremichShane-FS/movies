import express from "express";
import { dashboard, login, signup } from "../controllers/userController.js";
import { protectedRoute } from "../middlewares/protectedRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/dashboard", protectedRoute, dashboard);

export default router;
