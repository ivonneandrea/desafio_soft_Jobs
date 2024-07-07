import express from "express";
import cors from "cors";
import "dotenv/config";
import { logger } from "logger-express";

import signInRouter from "./config/routes/sign-in.route.js";
import loginRouter from "./config/routes/login.route.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(logger());
app.use(signInRouter);
app.use(loginRouter);


app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});