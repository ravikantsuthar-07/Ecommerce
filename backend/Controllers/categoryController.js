import categoryModel from "../Models/categoryModel.js";
import subCategoryModel from "../Models/subCategoryModel.js";

export const getCategoryController = async (req, res) => {
    try {
        const category = await categoryModel.find({ status: 1 });
        return res.status(200).send({
            success: true,
            message: `Getting Category Successfully`,
            category
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Categorys',
            error
        });
    }
}

export const getAdminCategoryController = async (req, res) => {
    try {
        const category = await categoryModel.find();
        return res.status(200).send({
            success: true,
            message: `Getting Category Successfully`,
            category
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Categorys',
            error
        });
    }
}

export const getSingleCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await categoryModel.findById(id);
        if (category.length === 1) {
            return res.status(200).send({
                success: true,
                message: 'Category Getting Successfully',
                category
            });
        } else {
            return res.status(404).send({
                success: false,
                message: `This Category is Not Aviable`
            });
        }
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Single Category',
            error
        });
    }
}

export const addNewCategoryController = async (req, res) => {
    try {

        const { name, position, priority, meta_keywords, meta_description } = req.body;
        const image = req.file;

        const category = await categoryModel({ name, position, image: image.filename, priority, meta_keywords, meta_description }).save();

        return res.status(201).send({
            success: true,
            message: `Category is Added Successfully`,
            category
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Add A New Category',
            error
        });
    }
}

export const updateStatusCategoryController = async (req, res) => {
    try {
        const { id } = req.params

        const { status } = req.body;

        if (status) {
            const category = await categoryModel.findByIdAndUpdate(id, { status: 1 }, { new: true })
            return res.status(200).send({
                success: true,
                message: `Category is DeActivate`,
                category
            });
        } else {
            const category = await categoryModel.findByIdAndUpdate(id, { status: 0 }, { new: true })
            return res.status(200).send({
                success: true,
                message: `Category is Activate`,
                category
            });
        }
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `Error in updating Status of Category`,
            error
        });
    }
}

export const updateCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, position, priority, meta_keywords, meta_description } = req.body;
        const image = req.files;
        const category = await categoryModel.findByIdAndUpdate(id, { name, position, image: image.filename, priority, meta_description, meta_keywords }, { new: true });
        return res.status(304).send({
            success: true,
            message: `Category Updated Successfully`,
            category
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `Error in updating Category`,
            error
        });
    }
}


export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await categoryModel.findByIdAndDelete(id);
        return res.status(200).send({
            success: true,
            message: `Category Deleted Successfully`,
            category
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `Error in Deleting Category`,
            error
        });
    }
}

export const getTotalCategoryController = async (req, res) => {
    try {

        const numberOfCategory = await categoryModel.find().countDocuments({})
        console.log("RAVI@@@");
        return res.status(200).send({
            success: true,
            message: `Total Number of Category is Getting Successfully`,
            numberOfCategory
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Numbers of Category',
            error
        });
    }
}

export const getSubCategoryController = async (req, res) => {
    try {
        const { parent_id } = req.params;
        const category = await subCategoryModel.find({ parent_id: { $eq: parent_id } }).populate("parent_id", "name");
        return res.status(200).send({
            success: true,
            message: `Sub Category Getting Successfully`,
            category
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `Error in Getting Sub Category`,
            error
        });
    }
}


export const getAdminSubCategoryController = async (req, res) => {
    try {
        const { parent_id } = req.params;
        const category = await subCategoryModel.find({ parent_id: { $eq: parent_id } }).populate("parent_id", "name");
        return res.status(200).send({
            success: true,
            message: `Sub Category Getting Successfully`,
            category
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `Error in Getting Sub Category`,
            error
        });
    }
}

export const getSingleSubCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await subCategoryModel.findById(id).populate("parent_id", "name");
        return res.status(200).send({
            success: true,
            message: `Single Category Getting Successfully`,
            category
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `Error in Getting Single Sub Category`,
            error
        });
    }
}


export const addNewSubCategoryController = async (req, res) => {
    try {
        const { name, parent_id, position, priority, meta_keywords, meta_description } = req.body;
        const image = req.file;
        const category = await subCategoryModel({ name, parent_id, position, image: image.filename, priority, meta_description, meta_keywords }).save();
        return res.status(201).send({
            success: true,
            message: `Sub Category is Added Successfully`,
            category
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Add A New Sub Category',
            error
        });
    }
}


export const updateStatusSubCategoryController = async (req, res) => {
    try {
        const { status } = req.body;
        if (status) {
            const category = await subCategoryModel.findByIdAndUpdate(id, { status: 0 })
            return res.status(200).send({
                success: true,
                message: `Category is DeActivate`,
                category
            });
        } else {
            const category = await subCategoryModel.findByIdAndUpdate(id, { status: 1 }, { new: true })
            return res.status(200).send({
                success: true,
                message: `Category is Activate`,
                category
            });
        }
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `Error in updating Status of Category`,
            error
        });
    }
}

export const updateSubCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, parent_id, position, priority, meta_keywords, meta_description } = req.body;
        const image = req.files;
        const category = await subCategoryModel.findByIdAndUpdate(id, { name, parent_id, position, image: image.filename, priority, meta_description, meta_keywords }, { new: true }).populate('parent_id', "name");
        return res.status(304).send({
            success: true,
            message: `Category Updated Successfully`,
            category
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `Error in updating Category`,
            error
        });
    }
}


export const deleteSubCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await subCategoryModel.findByIdAndDelete(id);
        return res.status(200).send({
            success: true,
            message: `Category Deleted Successfully`,
            category
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `Error in Deleting Category`,
            error
        });
    }
}

export const getTotalSubCategoryController = async (req, res) => {
    try {
        const numberOfCategory = await subCategoryModel.countDocuments({})
        return res.status(200).send({
            success: true,
            message: `Total Number of Category is Getting Successfully`,
            numberOfCategory
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Numbers of Category',
            error
        });
    }
}
