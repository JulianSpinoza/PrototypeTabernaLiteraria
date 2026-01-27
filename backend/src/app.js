import "dotenv/config";

import express from "express";
import cors from "cors";

import router from "./routes/creatures.routes.js";

const app = express();

const FRONTEND = process.env.FRONTEND_URL;

app.use(
  cors({
    origin: FRONTEND,
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend running" });
});

app.get("/ping", (req, res) => {
  res.json({ message: "Backend conectado 🟢" });
});

app.use("/creatures", router);

export default app;
