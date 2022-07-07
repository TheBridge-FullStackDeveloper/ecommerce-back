const { deleteProduct } = require("../../queries/product");

module.exports = (db) => async (req, res, next) => {

    const {id} = req.body;

    const queryResult = await deleteProduct(db)({id});

    if (!queryResult.ok) return next("Errorrrrrr al eliminar el producto"); //pendiente errors register[queryResult.code] || errors[500]

    res.status(200).json({
        success: true,
        message: 'Test Remove Product',
      });
}