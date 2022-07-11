const { updateProduct } = require("../../queries/product");


module.exports = (db) => async (req, res, next) => {

  const {productId, category, name, price, quantity, img, details, rate} = req.body

    //console.log( req.body )
    const queryResult = await updateProduct(db)({
      productId, 
      category, 
      name, 
      price, 
      quantity, 
      img, 
      details, 
      rate,

    })
    
    if (!queryResult.ok) return next("Errorrrrrr al actualizar el producto"); //pendiente errors register[queryResult.code] || errors[500]
    

    res.status(200).json({
        success: true,
        message: 'Test Update Product',
      });
}