const { createOrder } = require("../../queries/orders");
const errors =  require("../../errors/commons")

module.exports = (db) => (req, res, next) =>{

    const orders = req.body;

    const queryResult = createOrder(db)(orders);

    if (!queryResult.ok) return next(errors[400]);

    res.status(200).json({
        success: true,
        message: "Order Created"
    })
};