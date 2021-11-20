import express from 'express';
import 'express-async-errors';
import { secrets } from './utils/config';
import { app } from './app';

// Start listening
const expressServer = app.listen(secrets.PORT, () => {
  console.log(`💻 App listening on port ${secrets.PORT}`);
});

export { express };
