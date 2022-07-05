const router = require("express").Router();

module.exports = () => {
  router.use("/products", require("./products")());//pendiente pasar (db)

  return router;
};
