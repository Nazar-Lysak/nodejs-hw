import { Router } from 'express';
import { createNote, deleteNote, getNoteById, getAllNotes, updateNote } from '../controllers/notesController.js';

const notesRouter = Router();

notesRouter.get('/notes', getAllNotes);
notesRouter.post('/notes', createNote);
notesRouter.get('/notes/:noteId', getNoteById);
notesRouter.patch('/notes/:noteId', updateNote);
notesRouter.delete('/notes/:noteId', deleteNote);

export default notesRouter;
