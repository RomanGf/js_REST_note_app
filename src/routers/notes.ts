import express from "express";
import {
  getNote,
  getNoteStatic,
  getNotes,
  updateNote,
  deleteNote,
  postNote,
} from "../services/notes.service";

import { Validator } from "../middlewares/model-validator.middleware";

const router = express.Router();

router.get("/", getNotes);

router.get("/static", getNoteStatic);

router.get("/:id", getNote);

router.post("/", Validator("notes"), postNote);

router.delete("/:id", deleteNote);

router.patch("/:id", Validator("notes"), updateNote);

export default router;
