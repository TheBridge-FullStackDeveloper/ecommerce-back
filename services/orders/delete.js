const { deleteOrder } = require("../../queries/orders");

module.exports = (db) => async (req, res, next) =>{

    const {sell_id} = req.body;

    const queryResult = await deleteOrder(db)({sell_id})



    res.status(200).json({
        success: true,
        message: "Test Delete Product"
    })
}