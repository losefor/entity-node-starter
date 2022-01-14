import { Request, Response } from 'express';
import * as userService from './users.service';

export const getAllUsers = async (req: Request, res: Response) => {
  const [users, count] = await userService.findMany();

  return res.json({ count, data: users });
};
