import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import * as userService from '../../users/users.service';
import bcrypt from 'bcrypt';

const isValidPassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};

passport.use(
  'signup',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      try {
        const user = await userService.create({
          data: {
            username,
            password,
          },
        });
        return done(null, user);
      } catch (err) {
        return done('FAIL', null);
      }
    }
  )
);

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
    },
    async (username, password, done) => {
      try {
        // Fetch the user from the db
        const user = await userService.findUniqueUnsafe({
          where: {
            username,
          },
        });

        // If no user found
        if (!user) {
          return done('BAD_EMAIL', false);
        }

        // validate the password
        const validate = await isValidPassword(password, user.password);
        if (!validate) {
          return done('BAD_PASSWORD', false, { message: 'wrong password' });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);
