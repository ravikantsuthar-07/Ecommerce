import express from 'express';
import { isAdmin, requireSignIn } from '../MiddleWares/authMiddleWare.js';
import {
    getCountsByKeyOrdersController,
    getTotalOrdersController
} from '../Controllers/orderController.js';

const router = express.Router();

router.get(`/counts/:key`, requireSignIn, isAdmin, getCountsByKeyOrdersController);
router.get(`/totalOrders`, requireSignIn, isAdmin, getTotalOrdersController);

export default router;