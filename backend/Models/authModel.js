import mongoose from 'mongoose';

const authSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const authModel = mongoose.model('auth', authSchema);

export default authModel;