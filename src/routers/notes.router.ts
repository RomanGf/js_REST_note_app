import express from "express";
import {
  getNote,
  getNoteStatic,
  getNotes,
  updateNote,
  deleteNote,
  postNote,
} from "../controllers/notes.controller";

import { Validator } from "../middlewares/model-validator.middleware";

const router = express.Router();

router.get("/", getNotes);

router.get("/stats", getNoteStatic);

router.get("/:id", getNote);

router.post("/", Validator("notes"), postNote);

router.delete("/:id", deleteNote);

router.patch("/:id", Validator("notes"), updateNote);

export default router;
