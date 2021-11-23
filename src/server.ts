import express from 'express';
import 'express-async-errors';
import { config } from './utils/config';
import { app } from './app';

// Start listening
const expressServer = app.listen(config.PORT, () => {
  console.log(`App listening on http://localhost:${config.PORT}/api`);
});

export { express };
