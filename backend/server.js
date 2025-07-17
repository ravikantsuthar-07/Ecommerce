import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'


import connectDB from './Config/connection.js'
import authRoutes from './Routes/authRoutes.js'
import categoryRoutes from './Routes/categoryRoutes.js'
import productRoutes from './Routes/productRoutes.js'
import bussinessRoutes from './Routes/bussinessRoutes.js'
import ordersRoutes from './Routes/ordersRoutes.js'
dotenv.config();

connectDB();
const app = express();

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);


app.use(cookieParser())

app.use(`/api/v1/auth`, authRoutes);
app.use(`/api/v1/category`, categoryRoutes);
app.use(`/api/v1/product`, productRoutes);
app.use(`/api/v1/orders`, ordersRoutes);
app.use(`/api/v1/bussiness`, bussinessRoutes);



const PORT = process.env.PORT || 80

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
    
})