import mongoose from 'mongoose';

const businessSetUpSchema = mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true,
    },
    value: {
        type: String,
        require: true,
    }
}, { timestamp: true });

const businessSetUpModel = mongoose.model('businessSetUp', businessSetUpSchema);

export default businessSetUpModel;