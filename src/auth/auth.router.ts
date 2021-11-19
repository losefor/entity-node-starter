import { Application } from 'express';
import passport from 'passport';

export default function (app: Application) {
  app.post(
    '/signup',
    passport.authenticate('login', { session: false }),
    (req, res) => {
      res.json(req.user);
    }
  );
}
