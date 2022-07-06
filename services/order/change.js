const { changeProduct } = require("../../queries/orders");
const errors = require("../../errors/commons");

module.exports = (db) => async (req, res, next) => {
  const { email } = res.locals;
  const { newQuantity } = res.body;

  const queryResult = await changeProduct(db)({ email });

  if (!queryResult.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
  });
};