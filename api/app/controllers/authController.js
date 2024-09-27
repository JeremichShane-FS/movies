import jwt from "jwt-simple";
import { User } from "../models/User";

import { RESPONSE_MESSAGES as rm } from "../constants/responseMessages";

const tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.SECRET);
};

export const signup = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(422).json({ Error: rm.EMAIL_PASSWORD_REQUIRED });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(422).json({ Error: rm.EMAIL_EXISTS });

    const user = new User({ email, password });
    await user.save();
    res.status(201).json({
      user_id: user._id,
      message: rm.RECORD_CREATED_SUCCESSFULLY(req).replace("Record", "User"),
      token: tokenForUser(user),
    });
  } catch (err) {
    return next(err);
  }
};
