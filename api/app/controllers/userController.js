import { RESPONSE_MESSAGES as rm } from "../constants/responseMessages.js";
import { getJwtForUser } from "../middlewares/getJwtForUser.js";
import { User } from "../models/User.js";

export const signup = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(422).json({ Error: rm.EMAIL_PASSWORD_REQUIRED });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(422).json({ Error: rm.EMAIL_EXISTS });

    const user = new User({ email, password });
    await user.save();

    res.status(201).json({
      user: user,
      message: rm.RECORD_CREATED_SUCCESSFULLY(req).replace("Record", "User"),
      token: getJwtForUser(user),
    });
  } catch (err) {
    return next(err);
  }
};

export const login = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ Error: rm.RECORD_NOT_FOUND(email) });

    res.send({
      user: user,
      message: rm.RECORD_FETCHED_SUCCESSFULLY(req).replace("Record", "User"),
      token: getJwtForUser(user),
    });
  } catch (err) {
    return next(err);
  }
};

export const dashboard = async (req, res, next) => {
  try {
    res.send({
      message: "Welcome to the dashboard",
      user: req.user,
    });
  } catch (err) {
    return next(err);
  }
};
