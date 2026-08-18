import { Router } from 'express';
import { createNote, deleteNote, getNoteById, getAllNotes, updateNote } from '../controllers/notesController.js';

const notesRouter = Router();

notesRouter.get(getAllNotes);
notesRouter.post(createNote);
notesRouter.get('/:noteId', getNoteById);
notesRouter.patch('/:noteId', updateNote);
notesRouter.delete('/:noteId', deleteNote);

export default notesRouter;
