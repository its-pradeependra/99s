import express from 'express';
import { newImage, getGallery, deleteImage } from '../controller/gallery-controller.js';

const router = express.Router();

router.post('/create-image', newImage);
router.get('/get-gallery', getGallery);
router.delete('/delete/:id', deleteImage);

export default router;