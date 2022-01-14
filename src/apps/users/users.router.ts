import { Router } from 'express';
import passport from 'passport';
import * as usersController from './users.controller';
const router = Router();

router.get('/', usersController.getAllUsers);

export { router as userRouter };
