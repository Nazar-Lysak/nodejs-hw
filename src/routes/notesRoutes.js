import { Router } from 'express';
import { createNote, deleteNote, getNoteById, getNotes, updateNote } from '../controllers/notesController.js';

const notesRouter = Router();

notesRouter.get('/', getNotes);
notesRouter.post('/', createNote);
notesRouter.get('/:noteId', getNoteById);
notesRouter.patch('/:noteId', updateNote);
notesRouter.delete('/:noteId', deleteNote);

export default notesRouter;
