const { getAllProducts } = require("../../queries/product");


module.exports = (db) => async (req, res, next) => {

    const queryResult = await getAllProducts(db)();

    console.log(queryResult)
    if (!queryResult.ok) return next("hay un error"); /// pendiente errros
    
    
    res.status(200).json({
        success: true,
        message: 'Test Get-all',
        queryResult
      });
}