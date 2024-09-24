import express from 'express';
import { signup,googleSignup, signOut } from '../controller/auth-controller.js';

const router = express.Router();

router.post('/signup',signup);
router.post('/google',googleSignup);
router.get('/signout', signOut);

export default router;