const router = require("express").Router();

module.exports = () => {
  router.use("/products", require("./products")(db));//pendiente pasar (db)

  return router;
};
