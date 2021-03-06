const { createProducts, getOneProduct } = require("../../queries/product")

module.exports = (db) => async (req, res, next) => {

    const {productId, category, name, price, quantity, img, details, rate} = req.body

    const product = await getOneProduct(db)({productId});
    if(product.data) return next("Duplicado"); ///pendiente errors errors register[queryResult.code] || errors[500]
    
    const queryResult = await createProducts(db)({
      productId, 
      category, 
      name, 
      price, 
      quantity, 
      img, 
      details, 
      rate,
    })

    if (!queryResult.ok) return next("Errorrrrrr al crear producto"); //pendiente errors register[queryResult.code] || errors[500]
    
    res.status(200).json({
        success: true,
        message: 'Test Cretate Product',
      });
}