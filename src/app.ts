import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';
import router from './routers';
import express from 'express';

// Init the app
const app = express();

// Security headers
app.use(helmet());

// Compress requests
app.use(compression());

// Parse incoming requests with JSON payload
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
app.use(morgan('dev'));

// Authentication with passport
app.use(passport.initialize());
import './auth/strategies/jwt.strategy';
import './auth/strategies/local.strategy';
import { errorHandler } from './utils/errorHandler';

app.use('/api', router);

// Error handler
app.use(errorHandler);

export { app };
