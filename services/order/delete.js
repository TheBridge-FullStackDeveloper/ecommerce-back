const { deleteProduct } = require("../../queries/orders");
const errors = require("../../errors/commons");

module.exports = (db) => async (req, res, next) => {
  const { email } = res.locals;
  const { productId } = res.body;

  const queryResult = await deleteProduct(db)({ email, productId });

  if (!queryResult.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
  });
};