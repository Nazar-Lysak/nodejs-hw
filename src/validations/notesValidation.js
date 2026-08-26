import { Joi, Segments } from 'celebrate';
import { TAGS } from '../constants/tags.js';

import { isValidObjectId } from 'mongoose';

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const noteIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const createNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(3).max(30).required(),
    content: Joi.string().min(3).max(30).required(),
    tag: Joi.string()
      .valid(...TAGS)
      .default(TAGS[0]),
  }),
};

export const patchNoteSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectIdValidator).required(),
  }),
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(3).max(30),
    content: Joi.string().min(3).max(30),
    tag: Joi.string()
      .valid(...TAGS),
  }).min(1),
};
