import express from 'express';
import { getMembers, newMember, deleteMember, getMemberById } from '../controller/member-controller.js';

const router = express.Router();

router.post('/create-member', newMember);
router.get('/get-all-members', getMembers);
router.get('/get-member/:id', getMemberById);
router.delete('/delete/:id', deleteMember);

export default router;