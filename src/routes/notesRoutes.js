import { Router } from 'express';
import { getNotes, getNotesById } from '../controllers/notesController.js';

const router = Router();

router.get('/notes', getNotes);
router.get('/notes/:id', getNotesById);

export default router;
