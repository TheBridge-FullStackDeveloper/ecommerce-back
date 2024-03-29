const router = require("express").Router();

module.exports = (db) => {
  router.use("/auth", require("./auth")(db));
  router.use("/products", require("./products")(db));
  router.use("/user", require("./user")(db));
  router.use("/orders", require("./orders")(db));

  return router;
};
