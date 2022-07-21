const { getAllOrders } = require("../../queries/orders");

module.exports  = (db) => async (req, res, next) =>{

    const queryResult = await getAllOrders(db)();

    //console.log(queryResult)
    if (!queryResult.ok) return next("hay un error");

    res.status(200).json({
        success: true,
        message: 'test get-all orders',
        queryResult
    })
}