import { Router } from 'express';
import { authRouter } from './apps/auth/auth.router';
import { userRouter } from './apps/users/users.router';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);

export default router;
