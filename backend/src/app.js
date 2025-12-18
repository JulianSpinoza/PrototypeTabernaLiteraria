import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:8081",
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

export default app;
