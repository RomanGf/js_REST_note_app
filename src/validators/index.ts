import { notesSchema } from "./note-validators";
import { ObjectSchema } from "express-validation/node_modules/joi";
import { IDictionary } from "../models/generic-dictionary.model";

export const Validators: IDictionary<ObjectSchema> = {
  notes: notesSchema,
};
