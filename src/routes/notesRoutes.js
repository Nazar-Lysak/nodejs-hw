import { Router } from 'express';
import { createNote, deleteNote, getNoteById, getNotes, updateNote } from '../controllers/notesController.js';

const router = Router();

router.get('/notes', getNotes);
router.post('/notes', createNote);
router.get('/notes/:id', getNoteById);
router.patch('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);

export default router;
