const router = require("express").Router();
const { authorizer } = require("../../middlewares")

module.exports = (db) => {
    router.get("/get-all", require("./get-all")(db));
    router.post("/create", require("./create")(db));
    router.post("/delete", require("./delete")(db));
    router.post("/get-one", authorizer, require("./get-one")(db))
    
    return router;
}
