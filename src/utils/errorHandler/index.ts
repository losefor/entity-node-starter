import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { prismaErrorHandler } from './prismaErrorHandler';

const handler = async (
  error: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error);

  // Prisma error
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return prismaErrorHandler(req, res, error);
  }
};

export default handler;
