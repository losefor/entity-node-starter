import express from "express";
import { PrismaClient } from "@prisma/client";
import "express-async-errors";
import { secrets } from "./utils/config";

const app = express()

// Prisma client
const prisma = new PrismaClient({
    errorFormat: "pretty",
});

// Start listening
app.listen(secrets.PORT, () => {
    console.log(`💻 App listening on port ${secrets.PORT}`);
});

export { prisma , app};
