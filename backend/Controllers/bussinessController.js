import businessSetUpModel from "../Models/businessSetUpModel.js";

export const getBussinessController = async (req, res) => {
    try {
        const bussiness = await businessSetUpModel.find();
        return res.status(200).send({
            success: true,
            message: `Getting Bussiness Details Successfully`,
            bussiness
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: `Error in Getting Bussiness Details`,
            error
        });
    }
};