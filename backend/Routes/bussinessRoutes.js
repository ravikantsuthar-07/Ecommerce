import express from 'express';
import {
    getBussinessController
} from '../Controllers/bussinessController.js';

const router = express.Router();

router.get(`getBusiness`, getBussinessController);

export default router;