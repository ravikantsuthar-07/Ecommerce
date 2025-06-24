import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
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

const categoryModel = mongoose.model('Category', categorySchema);

export default categoryModel;