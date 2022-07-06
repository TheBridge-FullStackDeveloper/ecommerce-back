const { selectAllOrders } = require("../../queries/orders");
const errors = require("../../errors/commons");

module.exports = (db) => async (_, res, next) => {
    const { email } = res.locals;

    const queryResult = await selectAllOrders(db)({ email })

    if (!queryResult.ok) return next(errors[500]);

    const orders = queryResult.data

    res.status(200).json({
        success: true,
        data: orders,
    });
};