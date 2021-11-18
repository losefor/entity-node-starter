import express from "express";
import "express-async-errors";
import { secrets } from "./utils/config";

const app = express()



// Start listening
app.listen(secrets.PORT, () => {
    console.log(`💻 App listening on port ${secrets.PORT}`);
});

export { app};
