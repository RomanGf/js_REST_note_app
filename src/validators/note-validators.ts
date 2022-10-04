import { Joi } from 'express-validation';
import { ObjectSchema } from 'joi';

export const notesSchema: ObjectSchema = Joi.object({
  title: Joi.string().min(3).required(),
  content: Joi.string().min(3).required(),
  category: Joi.string().min(3).required(),
  archived: Joi.boolean().required(),
});

export const noteUpdateSchema: ObjectSchema = Joi.object({
  title: Joi.string().min(3),
  content: Joi.string().min(3),
  category: Joi.string().min(3),
  archived: Joi.boolean(),
});
