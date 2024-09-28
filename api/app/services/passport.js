import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../models/User.js";

const localOptions = { usernameField: "email" };

const localStrategy = new LocalStrategy(localOptions, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if (!user) return done(null, false);

    user.comparePassword(password, (err, isMatch) => {
      if (err) return done(err);
      if (!isMatch) return done(null, false);
      return done(null, user);
    });
  } catch (err) {
    return done(err);
  }
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const jwtStrategy = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findById(payload.sub);
    if (user) return done(null, user);
    return done(null, false);
  } catch (err) {
    return done(err, false);
  }
});

passport.use(localStrategy);
passport.use(jwtStrategy);

export default passport;
