import express from "express";

import { getCreatureById, getCreatures } from "../controllers/creatures.controller.js";
import { getClassifiers } from "../controllers/classifiers.controller.js";

const creatures_router = express.Router();

creatures_router.get("/", getCreatures);
creatures_router.get("/:id", getCreatureById);
creatures_router.get("/classifiers/:category_slug", getClassifiers);

export default creatures_router;