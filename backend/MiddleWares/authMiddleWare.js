import JWT from 'jsonwebtoken';
import userModel from '../Models/authModel.js';
import dotenv from 'dotenv';
// Protected Routes token based
dotenv.config();
export const requireSignIn = (req, res, next) => {
    try {
        const decode = JWT.verify(req.cookies.token, process.env.JWT_TOKEN);
        req.user = decode
        next();
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `User is Not Login`,
            error
        })
    }
}

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (!user.isAdmin) {
            return res.status(401).send({
                success: false,
                message: 'EnAnthorise User'
            })
        } else {
            next()
        }
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `Error in Checking User is Admin!..`,
            error
        })
    }
}