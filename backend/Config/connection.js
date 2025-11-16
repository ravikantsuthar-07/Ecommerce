import mongoose from 'mongoose';

const connectDB = () => {
    const connection = mongoose.connect(process.env.MONGO_DB_URL);
}

export default connectDB;