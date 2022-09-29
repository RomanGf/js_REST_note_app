import {Joi} from 'express-validation'

export const notesSchema = Joi.object({
  title: Joi.string().min(3).required(),
  content: Joi.string().min(3).required(),
  category: Joi.string().min(3).required(),
  archived: Joi.boolean().required(),
});

