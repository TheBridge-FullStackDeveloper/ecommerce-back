const router = require("express").Router();

module.exports = (db) => {
    router.get("/get-all", require("./get-all")(db));
    router.post("/create", require("./create")(db));
    router.post("/delete", require("./delete")(db));
    
    return router;
}