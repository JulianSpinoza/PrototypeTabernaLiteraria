import "dotenv/config";

import express from "express";
import cors from "cors";

import creatures_router from "./routes/creatures.routes.js";

const app = express();

const FRONTEND = process.env.FRONTEND_URL;

app.use(
  cors({
    origin: FRONTEND,
    credentials: true,
  })
);

app.use(express.json());
app.set("query parser", "extended");

app.use((req, res, next) => {
  console.log(`📩 Petición entrante: ${req.method} ${req.url}`);
  next();
});

app.use("/creatures", creatures_router);

export default app;
