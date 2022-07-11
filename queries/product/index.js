const { selectAllProducts, selectOneProduct, insertOneProduct, updateOneProduct, deleteOneProduct } = require("./queries"); 
const { queryCatcher } = require("../utils")
// Querie para coger un único producto: Me viene bien para luego hacer el Update de ese producto

const getOneProduct = (db) => async({productId}) =>{
    return await queryCatcher(
        db.maybeOne,
        "getOneProduct"
    )(selectOneProduct({productId}))
};

// Querie para coger todos los Productos 
const getAllProducts = (db) => 
    async() =>{

    return await queryCatcher(
        db.query, 
        "getAllProducts"
    )(selectAllProducts());
};


// Querie para crear un producto
const createProducts = (db) => 
    async({productId, category, name, price, quantity, img, details, rate}) =>{

    return await queryCatcher(
        db.query, 
        "createProducts"
    )(insertOneProduct({ 
        productId,
        category, 
        name, 
        price, 
        quantity, 
        img, 
        details, 
        rate
    }
    ));
};

// Querie para hacer Update de un Producto: Aquí tengo mas dudas de los argumentos que paso 

const updateProduct = (db) => async({productId, category, name, price, quantity, img, details, rate}) =>{
    const product = await getOneProduct(db)({productId});

    if(!product.data)
        return {
            ok: false,
            code:"Product doesnt exist"
        };

        return await queryCatcher(
            db.query, 
            "updateProduct"
        )(updateOneProduct({productId, category, name, price, quantity, img, details, rate}))
    
};

// Delete a Product 
const deleteProduct = (db) => async({productId}) =>{
    const product = await getOneProduct(db)({productId});

    if(!product.data)
        return {
            ok: false,
            code:"Product doesnt exist"
        };

        return await queryCatcher(
            db.query, 
            "deleteProduct"
        )(deleteOneProduct({productId}))
    
};

module.exports = {
    getOneProduct, 
    getAllProducts,
    createProducts,
    updateProduct,
    deleteProduct,
}
