const { selectOneProduct, selectAllProducts, insertOneProduct, updateOneProduct, deleteOneProduct } = require("./queries"); 
const { queryCatcher } = require("../utils");
// Querie para coger un único producto: Me viene bien para luego hacer el Update de ese producto

const getOneProduct = (db) => async({id}) =>{
    return await queryCatcher(
        db.maybeOne,
        "getOneProduct"
    )(selectOneProduct({id}))
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
    async({id, category, name, price, quantity, img, details, rate}) =>{

    return await queryCatcher(
        db.query, 
        "createProducts"
    )(insertOneProduct({ 
        id,
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

const updateProduct = (db) => async({id, category, name, price, quantity, img, details, rate}) =>{
    const product = await getOneProduct(db)({id});

    if(!product.data)
        return {
            ok: false,
            code:"Product doesnt exist"
        };

        return await queryCatcher(
            db.query, 
            "updateProduct"
        )(updateOneProduct({id, category, name, price, quantity, img, details, rate}))
    
};

// Delete a Product 
const deleteProduct = (db) => async({id}) =>{
    const product = await getOneProduct(db)({id});

    if(!product.data)
        return {
            ok: false,
            code:"Product doesnt exist"
        };

        return await queryCatcher(
            db.query, 
            "deleteProduct"
        )(deleteOneProduct({id}))
    
};

module.exports = {
    getOneProduct, 
    getAllProducts,
    createProducts,
    updateProduct,
    deleteProduct,
}
