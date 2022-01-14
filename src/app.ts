import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';
import router from './routers';
import { errorHandler } from './utils/errorHandler';

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
import './apps/auth/strategies/jwt.strategy';
import './apps/auth/strategies/local.strategy';
import { API_PREFIX } from './utils/config/config';

app.use(API_PREFIX, router);

// Error handler
app.use(errorHandler);

export { app };
