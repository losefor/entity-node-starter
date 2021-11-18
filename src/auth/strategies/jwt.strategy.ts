import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import * as userService from '../../users/users.service';

passport.use(
  'jwt-user',
  new JwtStrategy(
    {
      secretOrKey: 'secret123',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async ({ id }, done) => {
      try {
        const user = await userService.findUnique({
          where: { id },
        });
        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);
