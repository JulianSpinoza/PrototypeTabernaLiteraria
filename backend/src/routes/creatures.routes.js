import express from "express";

import { getCreatureById, getCreatures } from "../controllers/creatures.controller.js";

const router = express.Router();

router.get("/", getCreatures);
router.get("/:id", getCreatureById);

export default router;