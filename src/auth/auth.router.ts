import { Router } from 'express';
import passport from 'passport';
import * as authController from './auth.contoller';
const router = Router();

router.post(
  '/login',
  passport.authenticate('login', { session: false }),
  authController.login
);

router.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  authController.signup
);
export { router as authRouter };
