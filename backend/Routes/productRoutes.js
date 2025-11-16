import express from 'express';
import {
    addNewProductController,
    deleteProductController,
    getAdminProductController,
    getLimitProductController,
    getProductController,
    getSingleProductController,
    updateProductController,
    updateStatusProductController
} from '../Controllers/productController.js';
import { isAdmin, requireSignIn } from '../MiddleWares/authMiddleWare.js';

import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'image' ) {
            cb(null, process.cwd() + '/assets/Products/');
        } else {
            cb(new Error('Invalid field name'));
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.get(`/getAdminProducts`, requireSignIn, isAdmin, getAdminProductController);
router.get(`/getLimitProduct`, requireSignIn, isAdmin, getLimitProductController);
router.post(`/addNewProduct`, requireSignIn, isAdmin, upload.array('image', 10), addNewProductController);
router.put(`/updateStatus/:id`, requireSignIn, isAdmin, updateStatusProductController);
router.put(`/update/:id`, requireSignIn, isAdmin, upload.array('image', 10), updateProductController);
router.delete(`/deleteProduct/:id`, requireSignIn, isAdmin, deleteProductController);

router.get(`/getProducts`, getProductController);
router.get(`/getSingleProduct/:id`, getSingleProductController);
export default router