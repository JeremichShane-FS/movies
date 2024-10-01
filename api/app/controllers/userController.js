import { RESPONSE_MESSAGES as rm } from "../constants/responseMessages.js";
import { getJwtForUser } from "../middlewares/getJwtForUser.js";
import { User } from "../models/User.js";

export const signup = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({
      errors: [{ param: "email", msg: rm.EMAIL_PASSWORD_REQUIRED }],
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(422).json({
        errors: [{ param: "email", msg: rm.EMAIL_EXISTS }],
      });
    }

    const user = new User({ email, password });
    await user.save();

    res.status(201).json({
      user: user,
      message: rm.RECORD_CREATED_SUCCESSFULLY(req).replace("Record", "User"),
      token: getJwtForUser(user),
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.error(`User not found: ${email}`);
      return res.status(404).json({ error: rm.RECORD_NOT_FOUND(email) });
    }

    user.comparePassword(password, (err, isMatch) => {
      if (err) {
        console.error(`Error comparing password: ${err}`);
        return res.status(500).json({ error: rm.INTERNAL_SERVER_ERROR(err) });
      }
      if (!isMatch) {
        console.error(`Invalid credentials for user: ${email}`);
        return res.status(401).json({ error: rm.INVALID_CREDENTIALS });
      }

      res.send({
        user: user,
        message: rm.RECORD_FETCHED_SUCCESSFULLY(req).replace("Record", "User"),
        token: getJwtForUser(user),
      });
    });
  } catch (err) {
    console.error(`Login error: ${err}`);
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
