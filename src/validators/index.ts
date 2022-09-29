import { notesSchema } from "./notes.validators";
import { ObjectSchema } from "express-validation/node_modules/joi";
import { IDictionary } from "../models/iDictionary.model";

export const Validators: IDictionary<ObjectSchema> = {
  notes: notesSchema,
};
