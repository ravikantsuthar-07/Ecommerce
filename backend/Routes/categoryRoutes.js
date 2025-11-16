import express from 'express';
import { 
    addNewCategoryController,
    deleteCategoryController,
    getAdminCategoryController,
    getAdminSubCategoryController,
    getCategoryController,
    getSingleCategoryController,
    gettingSubCategoryController,
    getTotalCategoryController,
    updateCategoryController,
    updateStatusCategoryController,
} from '../Controllers/categoryController.js';
import { isAdmin, requireSignIn } from '../MiddleWares/authMiddleWare.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'img' ) {
            cb(null, process.cwd() + '/assets/Categories/');
        } else {
            cb(new Error('Invalid field name'));
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage });
// Category
router.get(`/main`, requireSignIn, isAdmin, getAdminCategoryController);
router.get(`/sub`, requireSignIn, isAdmin, getAdminSubCategoryController);
router.get(`/getSingleCategory/:id`, requireSignIn, isAdmin, getSingleCategoryController);
router.post(`/addNewCategory`, requireSignIn, isAdmin, upload.single('img'), addNewCategoryController);
router.put(`/updateStatusCategory/:id`, requireSignIn, isAdmin, updateStatusCategoryController);
router.put(`/updateCategory/:id`, requireSignIn, isAdmin, updateCategoryController);
router.delete(`/deleteCategory/:id`, requireSignIn, isAdmin, deleteCategoryController);

router.get(`/getMainCategory`, getCategoryController);
router.get(`/getSubCategory/:parentId`, gettingSubCategoryController);
router.get(`/totalCategory`, getTotalCategoryController);

export default router;