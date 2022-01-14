import { User } from '.prisma/client';
import { Request, Response } from 'express';
import * as authService from './auth.service';

export const login = async (
  req: Request,
  res: Response
): Promise<Response<any>> => {
  return res.json(authService.reshape(req.user as User));
};

export const signup = async (
  req: Request,
  res: Response
): Promise<Response<any>> => {
  return res.json(authService.reshape(req.user as User));
};
