const { updateProduct } = require("../../queries/product");
const errors = require("../../errors/products")

module.exports = (db) => async (req, res, next) => {

  const {ref, name, price, stock, img, details, category_id} = req.body;

    const queryResult = await updateProduct(db)({
      ref, 
      name, 
      price, 
      stock, 
      img, 
      details, 
      category_id

    })
    
    if (!queryResult.ok) return next(errors[403]);
    

    res.status(200).json({
        success: true,
        message: 'Product Updated',
      });
}