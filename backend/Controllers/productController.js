import businessSetUpModel from "../Models/businessSetUpModel.js";
import productModel from "../Models/prouctModel.js";
import fs from 'fs'

export const getProductController = async (req, res) => {
    try {
        const product = await productModel.find({ status: 1, total_stock: { $ne: 0 } }).populate("category", "name").populate("subCategory", "name");
        return res.status(200).send({
            success: true,
            message: `Product Getting Successfully`,
            product
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `Error in Getting Products`,
            error
        });
    }
};

export const getAdminProductController = async (req, res) => {
    try {
        const product = await productModel.find().populate("category", "name").populate("subCategory", "name");
        return res.status(200).send({
            success: true,
            message: `Getting Product Successfully`,
            product
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `Error in Getting Product`,
            error
        });
    }
};

export const getLimitProductController = async (req, res) => {
    try {
        const bussiness = await businessSetUpModel.find({ key: "limited_stock" });

        let limited_stock = bussiness.key;

        const product = await productModel.find({
            $expr: {
                $lt: ["$total_stock", limited_stock]
            }
        });

        return res.status(200).send({
            success: true,
            message: `Getting Product Succesfully`,
            product
        });

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Limited Products',
            error
        });
    }
};

export const getSingleProductController = async (req, res) => {
    const { id } = req.params;
    const product = await productModel.findById(id).populate("category", "name").populate("subCategory");
    if (product.length > 0) {
        return res.status(200).send({
            success: true,
            message: `Getting Single Product Succesfully`,
            product
        });
    } else {
        return res.status(404).send({
            success: false,
            message: 'Product Not Found!...'
        })
    }
}

export const addNewProductController = async (req, res) => {
    try {
        console.log("RAVIII");

        const { name, category, subCategory, description, price, tax, status, discount, unit, total_stock, discount_type, tax_type, meta_title, meta_description } = req.body;
        let image = req.files;
        let img = [];
        for (let i = 0; i < image.length; i++) {
            img.push(image[i].filename);

        }
        image = JSON.stringify(img)

        const product = await productModel({ name, category, subCategory, description, price, tax, status, discount, unit, total_stock, discount_type, tax_type, meta_title, meta_description, image }).save();
        return res.status(201).send({
            success: true,
            message: `Product Added Successfully`,
            product
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `Error in Add a new product!..`,
            error
        });
    }
};

export const updateStatusProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        let message;
        const product = await productModel.findByIdAndUpdate(id, { status: !status })
        if (status) {
            message = `Product is De-Ativate`;
        } else {
            message = `Product is Activate`;
        }
        return res.status(200).send({
            success: true,
            message,
            product
        });

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `Error in updating Status product!..`,
            error
        });
    }
};

export const updateProductController = async (req, res) => {
    try {
        const { id } = req.params;
        let product = productModel.findById(id);
        const { name, category, subCategory, description, price, tax, status, discount, unit, total_stock, discount_type, tax_type, meta_title, meta_description } = req.body;
        let image = req.files;
        let images = product.image;
        if (image.length !== 0) {

            let img = images;
            for (let i = 0; i < image.length; i++) {
                img.push(image[i].filename);

            }
            image = JSON.stringify(images, img)
        } else {
            image = product.image
        }
        product = await productModel.findByIdAndUpdate(id, { name, category, subCategory, description, price, tax, status, discount, unit, total_stock, discount_type, tax_type, meta_title, meta_description, image }, { new: true })
        return res.status(200).send({
            success: true,
            message: `Product Updated Succesfully`,
            product
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `Error in updating product!..`,
            error
        });
    }
};


export const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params;
        let product = await productModel.findById(id);
        let img = product.image;
        for (let i = 0; i < img.length; i++) {
            fs.unlinkSync(process.cwd() + `/assets/Products/${img[i]}`);
        }
        product = await productModel.findByIdAndDelete(id);
        return res.status(200).send({
            success: true,
            message: `Product is Deleted Successfully`,
            product
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `Error in deleting product!..`,
            error
        });
    }
}