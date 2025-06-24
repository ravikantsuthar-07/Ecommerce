import express from 'express';
import { 
    addNewCategoryController,
    addNewSubCategoryController,
    deleteCategoryController,
    deleteSubCategoryController,
    getAdminCategoryController,
    getAdminSubCategoryController,
    getCategoryController,
    getSingleCategoryController,
    getSingleSubCategoryController,
    getSubCategoryController,
    getTotalCategoryController,
    getTotalSubCategoryController,
    updateCategoryController,
    updateStatusCategoryController,
    updateStatusSubCategoryController,
    updateSubCategoryController
} from '../Controllers/categoryController.js';
import { isAdmin, requireSignIn } from '../MiddleWares/authMiddleWare.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'image' ) {
            cb(null, process.cwd() + '/assets/Categories/');
        } else if (file.fieldname === 'img') {
            cb(null, process.cwd() + '/assets/Sub_Categories/');
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
router.get(`/getCategory`, getCategoryController);
router.get(`/getSingleCategory/:id`, requireSignIn, isAdmin, getSingleCategoryController);
router.get(`/getAdminCategory`, requireSignIn, isAdmin, getAdminCategoryController);
router.post(`/AddNewCategory`, requireSignIn, isAdmin, upload.single('image'), addNewCategoryController);
router.put(`/updateStatusCategory/:id`, requireSignIn, isAdmin, updateStatusCategoryController);
router.put(`/updateCategory/:id`, requireSignIn, isAdmin, updateCategoryController);
router.delete(`/deleteCategory/:id`, requireSignIn, isAdmin, deleteCategoryController);
router.get(`/totalCategory`, getTotalCategoryController);

// SubCategory
router.get(`/getSubCategory/:parent_id`, getSubCategoryController);
router.get(`/getSingleSubCategory/:id`, requireSignIn, isAdmin, getSingleSubCategoryController);
router.get(`/getAdminSubCategory`, requireSignIn, isAdmin, getAdminSubCategoryController);
router.post(`/addNewSubCategory`, requireSignIn, isAdmin, upload.single('img'), addNewSubCategoryController);
router.put(`/updateSubStatusCategory/:id`, requireSignIn, isAdmin, updateStatusSubCategoryController);
router.put(`/updateSubCategory/:id`, requireSignIn, isAdmin, updateSubCategoryController);
router.delete(`/deleteSubCategory/:id`, requireSignIn, isAdmin, deleteSubCategoryController);
router.get(`/totalSubCategory`, getTotalSubCategoryController);


export default router;