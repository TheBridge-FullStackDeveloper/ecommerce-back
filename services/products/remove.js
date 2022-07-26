const { deleteProduct } = require("../../queries/product");
const errors =  require("../../errors/products");

module.exports = (db) => async (req, res, next) => {

    const {ref} = req.body;

    const queryResult = await deleteProduct(db)({ref});

    if (!queryResult.ok) return next(errors[401]); //pendiente errors register[queryResult.code] || errors[500]

    res.status(200).json({
        success: true,
        message: 'Producto removed',
      });
}