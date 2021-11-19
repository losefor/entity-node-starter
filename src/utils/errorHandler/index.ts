import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { prismaErrorHandler } from './prismaErrorHandler';
import { BadRequestException } from './commonError';

export const errorHandler = async (
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

  if (error instanceof BadRequestException) {
    return res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};
