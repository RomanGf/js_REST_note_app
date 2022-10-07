import { notesSchema, noteUpdateSchema } from "./note-validators";
import { ObjectSchema } from "express-validation/node_modules/joi";
import { IDictionary } from "../dto_models/generic-dictionary.model";

export const Validators: IDictionary<ObjectSchema> = {
  notes: notesSchema,
  updateNote: noteUpdateSchema 
};
