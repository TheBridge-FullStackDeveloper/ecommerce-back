const { createOrder } = require("../../queries/orders");

module.exports = (db) => (req, res, next) =>{

    const orders = req.body;

    const queryResult =  createOrder(db)(orders);


    res.status(200).json({
        success: true,
        message: "Test de nuestro create"
    })
};