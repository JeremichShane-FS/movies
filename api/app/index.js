import cors from "cors";
import express from "express";
import routeHandler from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", routeHandler);

export default app;
