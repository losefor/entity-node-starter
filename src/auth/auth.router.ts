import { Router } from 'express';
import passport from 'passport';
import * as authController from './auth.contoller';

const router = Router();

router.post(
  '/login',
  passport.authenticate('login', { session: false }),
  (req, res) => res.json(req.user)
);

export { router as authRouter };
