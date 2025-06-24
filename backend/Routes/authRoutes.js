import express from 'express';
import { adminAuthController, loginAuthController, registerAuthController, userAuthController } from '../Controllers/authController.js';
import { isAdmin, requireSignIn } from '../MiddleWares/authMiddleWare.js';

const router = express.Router();

router.post(`/register`, registerAuthController);
router.post(`/login`, loginAuthController);

router.get(`/user-auth`, requireSignIn, userAuthController);
router.get(`/admin-auth`, requireSignIn, isAdmin, adminAuthController);



export default router