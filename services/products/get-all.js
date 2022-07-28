const { getAllProducts } = require("../../queries/product");
const errors = require("../../errors/commons")

module.exports = (db) => async (req, res, next) => {

    const queryResult = await getAllProducts(db)();

    console.log(queryResult)
    if (!queryResult.ok) return next(errors[500]); 
    
    res.status(200).json({
        success: true,
        data:queryResult.data
      });
}