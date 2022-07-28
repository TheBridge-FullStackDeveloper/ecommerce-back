const { createProducts, getOneProduct } = require("../../queries/product");
const errors =  require("../../errors/products")


module.exports = (db) => async (req, res, next) => {

    const {ref, name, price, stock, img, details, category_id} = req.body

    const product = await getOneProduct(db)({ref});
    
    if(product.data.length) return next(errors[401]);

    const queryResult = await createProducts(db)({
      ref, 
      name, 
      price, 
      stock, 
      img, 
      details, 
      category_id
    })

    if (!queryResult.ok) return next(errors[400]);
    
    res.status(200).json({
        success: true,
        
      });
}