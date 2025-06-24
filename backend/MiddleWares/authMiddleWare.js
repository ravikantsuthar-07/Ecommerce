import JWT from 'jsonwebtoken';
import userModel from '../Models/authModel.js';

// Protected Routes token based
export const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_TOKEN);
        req.user = decode
        next();
    } catch (error) {
        console.log(error);
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
        console.log(error);
    }
}