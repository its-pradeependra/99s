import express from 'express';
import { getMembers, newMember, deleteMember, getMemberById, newFriendMember, getFriends, getFriendsById } from '../controller/member-controller.js';

const router = express.Router();

router.post('/create-member', newMember);
router.post('/create-friend-member', newFriendMember);
router.get('/get-all-members', getMembers);
router.get('/get-member/:id', getMemberById);
router.get('/get-all-friend', getFriends);
router.get('/get-friend/:id', getFriendsById);
router.delete('/delete/:id', deleteMember);

export default router;