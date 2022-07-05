const { selectAllOrders } = require("../../queries/orders");
const errors = require("../../errors/commons");

module.exports = (db) => async (_, res, next) => {
    const { userId } = res.locals;

    const queryResult = await selectAllOrders(db)({ userId })

    if (!queryResult.ok) return next(errors[400]);

    const orders = queryResult.data

    res.status(200).json({
        success: true,
        data: orders,
    });
};