import mongoose from 'mongoose';

const subcategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    parent_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    },
    position: {
        type: Number,
        required: true,
        unique: true,
    },
    status: {
        type: Number,
        required: true,
        default: 1
    },
    image:{
        type: String,
        required: true,
    },
    priority:{
        type:Number,
        required: true,
        default: 1,
    },
    meta_keywords:{
        type: String,
    },
    meta_description:{
        type: String,
    },
}, { timestamps: true });

const subCategoryModel = mongoose.model('SubCategory', subcategorySchema);

export default subCategoryModel;