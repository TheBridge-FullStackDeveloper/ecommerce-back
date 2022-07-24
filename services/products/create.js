const { createProducts, getOneProduct } = require("../../queries/product");
const errors =  require("../../errors/products")


module.exports = (db) => async (req, res, next) => {

    const {ref, name, price, stock, img, details, rate, category_id} = req.body

    const product = await getOneProduct(db)({ref});
    if(product.data) return next(errors[404]);

    const queryResult = await createProducts(db)({
      ref, 
      name, 
      price, 
      stock, 
      img, 
      details, 
      rate,
      category_id
    })

    if (!queryResult.ok) return next(errors[400]);
    
    res.status(200).json({
        success: true,
        message: 'Test Create Product',
      });
}