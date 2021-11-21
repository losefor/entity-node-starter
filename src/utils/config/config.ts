import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const SECRET_KEY = process.env.SECRET_KEY;
