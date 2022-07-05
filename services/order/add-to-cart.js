const { addProduct } = require("../../queries/orders");
const errors = require("../../errors/commons");

module.exports = (db) => async (req, res, next) => {
  const { productId } = req.body;
  const { userId } = res.locals;

  const queryResult = await addProduct(db)({ productId });

  if (!queryResult.ok) return next(login[queryResult.code] || errors[500]);


  res.status(200).json({
    success: true,
  });
};