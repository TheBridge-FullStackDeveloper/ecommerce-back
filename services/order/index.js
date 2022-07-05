const router = require("express").Router();

module.exports = (db) => {
  router.get("/get-all", require("./get-all")(db));
  router.post("/add-to-cart", require("./add-to-cart")(db));
  router.put("/change", require("./change")());
  router.delete("/delete", require("./delete")());

  return router;
};
