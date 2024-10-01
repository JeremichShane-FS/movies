import cors from "cors";
import express from "express";
import passport from "../services/passport.js";

const appConfig = app => {
  app.use(cors());
  app.use(express.json());
  app.use(passport.initialize());
};

export default appConfig;
