const { addProduct } = require("../../queries/orders");
const errors = require("../../errors/commons");

module.exports = (db) => async (req, res, next) => {
  const { productId } = req.body;
  const { email } = res.locals;

  const queryResult = await addProduct(db)({ productId, email });

  if (!queryResult.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
  });
};