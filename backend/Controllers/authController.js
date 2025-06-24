import { comparePassword, hashPassword } from "../Helpers/authHelper.js";
import authModel from "../Models/authModel.js";
import JWT from 'jsonwebtoken'
export const registerAuthController = async (req, res) => {
    try {
        
        const { name, mobile, email, password } = req.body;
        if (!name) {
            return res.status(400).send({
                success: false,
                message: 'Name is Required!..'
            });
        }

        if (!mobile) {
            return res.status(400).send({
                success: false,
                message: 'Mobile Number is Required!..'
            });
        }

        if (!email) {
            return res.status(400).send({
                success: false,
                message: 'Email is Required!..'
            });
        }

        if (!password) {
            return res.status(400).send({
                success: false,
                message: 'Password is Required!..'
            });
        }
        
        const existUser = await authModel.find({ email });
        console.log(existUser);
        if (existUser.length !== 0) {
            return res.status(401).send({
                success: false,
                message: `${email} is Already Register`
            });
        }

        const hashedPasssword = await hashPassword(password);

        const Auth = await authModel({ name, email, mobile, password: hashedPasssword }).save()

        return res.status(201).send({
            success: true,
            message: 'User Regiseter Suceesfully',
            Auth
        })

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Register',
            error
        });
    }
}

export const loginAuthController = async (req, res) => {
    try {
        
        const { email, password } = req.body;
        if (!email) {
            return res.status(400).send({
                success: false,
                message: 'Email is Required'
            });
        }
        
        if (!password) {
            return res.status(400).send({
                success: false,
                message: 'Password is Required!...',
            });
        }
        
        const user = await authModel.find({ email });
        if (!user) {
            return res.status(403).send({
                success: false,
                message: `${email} is not Register!..`
            });
        } else {
            const match = await comparePassword(password, user[0].password);
            if (match) {
                const token = await JWT.sign({ _id: user[0]._id }, process.env.JWT_TOKEN, { expiresIn: '5d' });
                return res.status(200).send({
                    success: true,
                    message: 'Login Suceesfully',
                    user,
                    token
                });
            } else {
                return res.status(400).send({
                    success: false,
                    message: 'Password is Invalid'
                });
            }

        }
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Login',
            error
        });
    }
}

export const userAuthController = (req, res) => {
    return res.status(200).send({success: true})
}

export const adminAuthController = (req, res) => {
    return res.status(200).send({success: true})
}