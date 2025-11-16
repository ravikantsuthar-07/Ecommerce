import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';


import connectDB from './Config/connection.js';
import authRoutes from './Routes/authRoutes.js';
import categoryRoutes from './Routes/categoryRoutes.js';
import productRoutes from './Routes/productRoutes.js';
import bussinessRoutes from './Routes/bussinessRoutes.js';
import ordersRoutes from './Routes/ordersRoutes.js';
dotenv.config();

connectDB();
const app = express();

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

app.use(cookieParser())

app.use(`/api/v1/auth`, authRoutes);
app.use(`/api/category`, categoryRoutes);
app.use(`/api/v1/product`, productRoutes);
app.use(`/api/v1/orders`, ordersRoutes);
app.use(`/api/v1/bussiness`, bussinessRoutes);

app.use('/static', express.static(path.join(__dirname, 'assets')));

const PORT = process.env.PORT || 80

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
});