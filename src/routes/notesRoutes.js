import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getNoteById,
  getAllNotes,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import {
  createNoteSchema,
  getNotesSchema,
  noteIdParamSchema,
  patchNoteSchema,
} from '../validations/notesValidation.js';

const notesRouter = Router();

notesRouter.get('/notes', celebrate(getNotesSchema), getAllNotes);
notesRouter.post(
  '/notes',
  celebrate(createNoteSchema, { abortEarly: false }),
  createNote,
);
notesRouter.patch(
  '/notes/:noteId',
  celebrate(patchNoteSchema, { abortEarly: false }),
  updateNote,
);
notesRouter.get('/notes/:noteId', celebrate(noteIdParamSchema), getNoteById);
notesRouter.delete('/notes/:noteId', celebrate(noteIdParamSchema), deleteNote);

export default notesRouter;
