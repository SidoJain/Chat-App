import express from 'express';

import protectRoute from '../middlewares/protectRoute.js';
import { getUsers, changeName, deleteAccount } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', protectRoute, getUsers);

router.post('/', protectRoute, changeName);

router.post('/delete', protectRoute, deleteAccount);

export default router;