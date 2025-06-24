import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subCategory',
    },
    description: {
        type: String,
        required: true,
    },
    image: [{
        type: String,
        require: true,
    }],
    price: {
        type: Number,
        required: true,
    },
    tax: {
        type: Number,
        requied: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    discount: {
        type: Number,
        default: 0,
    },
    unit: {
        type: String,
        default: 'pc'
    },
    total_stock: {
        type: Number,
        default: 0
    },
    discount_type: {
        type: String,
        default: 'present',
    },
    tax_type: {
        type: String,
        default: 'present',
    },
    popularity_count: {
        type: Number,
        default: 0,
    },
    is_featured: {
        type: Number,
        default: 0,
    },
    view_count: {
        type: Number,
        default: 0,
    },
    maximEDum_order_quantity: {
        type: Number,
        default: 10,
    },
    meta_title: {
        type: String,
        default: null,
    },
    meta_description: {
        type: String,
        default: null
    },
}, { timestamp: true });

const productModel = mongoose.model('Product', productSchema);

export default productModel