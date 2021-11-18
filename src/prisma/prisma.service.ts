import { PrismaClient } from '@prisma/client';

// Prisma client
export const prisma = new PrismaClient({
  errorFormat: 'pretty',
});
