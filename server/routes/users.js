import express from 'express';
import { getAllUsers } from '../controllers/users.js';
import {login, signup} from '../controllers/auth.js'

const router = express.Router();
router.post('/signup',signup)
router.post('/login',login)

router.post('/getAllUsers',getAllUsers)

export default router