const { getOneOrder } = require("../../queries/orders");


module.exports = (db) => async (req, res, next) =>{

    const { email } = res.locals;

    const queryResult = await getOneOrder(db)({ email });

    if(!queryResult.ok) return next(errors[400]);

    res.status(200).json({
        success: true,
        data: queryResult.data,
        
    })
}