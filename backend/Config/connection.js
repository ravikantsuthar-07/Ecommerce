import mongoose from 'mongoose';

const connectDB = () => {
    const connection = mongoose.connect(process.env.MONGO_DB_URL)
    console.log(`connected to database Successfully!...`);
}

export default connectDB;