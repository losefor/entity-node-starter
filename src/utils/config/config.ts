import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

type NodeEnv = 'development' | 'production';

export const PORT = process.env.PORT || 3000;
export const NODE_ENV =
  (process.env.NODE_ENV as NodeEnv) || ('development' as NodeEnv);
export const SECRET_KEY = process.env.SECRET_KEY;
