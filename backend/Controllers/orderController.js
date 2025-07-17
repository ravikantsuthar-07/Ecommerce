import orderModels from "../Models/orderModel.js";

export const getCountsByKeyOrdersController = async (req, res) => {
    try {
        const key = req.params.key;
        
        const results = await orderModels.find({ order_status: key });
        return res.status(200).send({
            success: true,
            message: `${key} Total orders getting Successfully`,
            results: results.length
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Counts',
            error
        })
    }
}

export const getTotalOrdersController = async (req, res) => {
    try {
        const orders = orderModels.find({});
        return res.status(200).send({
            success: true,
            message: 'Getting Total Number Order Successfully!..',
            results: orders.length
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Total Number of orders',
            error
        })
    }
}