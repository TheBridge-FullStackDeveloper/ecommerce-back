const { deleteOrder } = require("../../queries/orders");
const errors =  require("../../errors/commons")

module.exports = (db) => async (req, res, next) =>{

    const {sell_id} = req.body;

    const queryResult = await deleteOrder(db)({sell_id})

    if (!queryResult.ok) return next(errors[400]);

    res.status(200).json({
        success: true,
        message: "Order Deleted"
    })
}