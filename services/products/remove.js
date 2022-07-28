const { getOneProduct, deleteProduct } = require("../../queries/product");
const errors =  require("../../errors/products");
const server =  require("../../errors/commons")

module.exports = (db) => async (req, res, next) => {

    const {ref} = req.body;

    const product = await getOneProduct(db)({ref});
    
    if(!product.data.length) return next(errors[402]);

    const queryResult = await deleteProduct(db)({ref});

    if (!queryResult.ok) return next(server[500]); 

    res.status(200).json({
        success: true,
        message: 'Producto removed',
      });
}