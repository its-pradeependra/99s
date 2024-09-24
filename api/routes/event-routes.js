import express from 'express';
import { createEvent, deleteEvent, getEvent, getAllEvent } from '../controller/event-controller.js';
const router = express.Router();

router.post('/create', createEvent);
router.delete('/delete/:id', deleteEvent);
router.get('/get/:id', getEvent);
router.get('/get-all-event', getAllEvent);

export default router;