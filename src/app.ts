import express from "express";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";

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
app.use(morgan("dev"));

//  TODO : Manage the routers
//  TODO : Manage the error handling
//  TODO : Manage authentication

export default app;
