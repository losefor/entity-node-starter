import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';

export const prismaErrorHandler = async (
  req: Request,
  res: Response,
  error: Prisma.PrismaClientKnownRequestError
) => {
  function response(detail: string) {
    return res.status(400).json({ detail });
  }

  switch (error.code) {
    case 'P2002':
      return response('The item is already exist in the data base');

    case 'P2003':
      return response('Did not found the item');

    case 'P2005':
      return response('Invalid inserted field type');

    case 'P2006':
      return response('The provided data is infalid');

    case 'P2007':
      return response('data validation error');

    case 'P2012':
      return response('missing a required field');

    case 'P2011':
      return response('Null constraint violation on the');

    case 'P2019':
      return response('input error');

    case 'P2025':
      return response('This require an input that is not provided');

    default:
      return res
        .status(500)
        .json({ status: 500, error: 'Unhandled prisma error' });
  }
};
