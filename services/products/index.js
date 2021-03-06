const router = require("express").Router();
const { checker } = require("../../middlewares");

const forms = {
    create: ['productId', 'category', 'name', 'price', 'quantity', 'img', 'details', 'rate'],
    update: ['productId', 'category', 'name', 'price', 'quantity', 'img', 'details', 'rate'],
    remove: ['productId']
}

module.exports = (db) => {
    
    router.get("/get-all", require("./get-all")(db));
    router.post("/create", checker(...forms.create), require("./create")(db));
    router.post("/update", checker(...forms.update), require("./update")(db));
    router.post("/remove", checker(...forms.remove), require("./remove")(db));

    return router;
}