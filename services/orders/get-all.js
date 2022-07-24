const { getAllOrders } = require("../../queries/orders");
const errors =  require("../../errors/commons")

module.exports  = (db) => async (req, res, next) =>{

    const queryResult = await getAllOrders(db)();

    //console.log(queryResult)
    if (!queryResult.ok) return next(errors[400]);

    res.status(200).json({
        success: true,
        message: 'All orders:',
        queryResult
    })
}