const router = require("express").Router();
const { authorizer } = require("../middlewares")

module.exports = (db) => {
  router.use("/order", authorizer, require("./order")(db));

  return router;
};
