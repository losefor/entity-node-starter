import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';
// Initialize the express app
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

//  TODO : Manage the routers
//  TODO : Manage the error handling

export default app;
