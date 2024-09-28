import { RESPONSE_MESSAGES as rm } from "../constants/responseMessages.js";

export const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) return next();

  res.status(400).json({ message: rm.PROVIDE_DETAILS });
};
