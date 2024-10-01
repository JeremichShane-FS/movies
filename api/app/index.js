import express from "express";
import { appConfig } from "./config/index.js";
import routeHandler from "./routes/index.js";

import { RESPONSE_MESSAGES as rm } from "./constants/responseMessages.js";
import { handleMongooseErrors } from "./middlewares/handleMongooseErrors.js";

const app = express();

appConfig(app);

app.use("/api/v1", routeHandler);

app.use(handleMongooseErrors);

app.use((req, res, next) => {
  const error = new Error(rm.API_NOT_FOUND(req));
  error.status = 404;
  return next(error);
});

app.use((err, req, res, next) => {
  console.error(rm.REQUEST_ERROR(err, req));
  if (res.headersSent) return next(err);

  res.status(err.status || 500).json({
    success: false,
    message: err.status === 404 ? err.message : rm.INTERNAL_SERVER_ERROR(err),
  });
});

export default app;
