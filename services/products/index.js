const router = require("express").Router();
const { checker } = require("../../middlewares");

const forms = {
    create: ['productId', 'category', 'name', 'price', 'quantity', 'img', 'details', 'rate'],
    update: ['productId'],
    remove: ['productId']
}

module.exports = () => {//pendiente pasar (db)
    
    router.get("/get-all", require("./get-all")());//pendiente pasar (db)
    router.post("/create", checker(...forms.create), require("./create")());//pendiente pasar (db)
    router.post("/update", checker(...forms.update), require("./update")());//pendiente pasar (db)
    router.post("/remove", checker(...forms.remove), require("./remove")());//pendiente pasar (db)

    return router;
}