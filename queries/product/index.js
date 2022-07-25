const { selectAllProducts, selectOneProduct, insertOneProduct, updateOneProduct, deleteOneProduct } = require("./queries"); 
const { queryCatcher } = require("../utils")
// Querie para coger un único producto: Me viene bien para luego hacer el Update de ese producto

const getOneProduct = (db) => async({ref}) =>{
    
    return await queryCatcher(
        db.query,
        "getOneProduct"
    )(selectOneProduct({ref}))
};

// Querie para coger todos los Productos 
const getAllProducts = (db) => async() =>{
    return await queryCatcher(db.query, "getAllProducts")(selectAllProducts());
};


// Querie para crear un producto
const createProducts = (db) => 
    async({ref, name, price, stock, img, details, rate, category_id}) =>{
        console.log(category_id)
    return await queryCatcher(
        db.query, 
        "createProducts"
    )(insertOneProduct({ 
        ref, 
        name, 
        price, 
        stock, 
        img, 
        details, 
        rate, 
        category_id
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
const deleteProduct = (db) => async({ref}) =>{
    const product = await getOneProduct(db)({ref});

    if(!product.data)
        return {
            ok: false,
            code:"Product doesnt exist"
        };

        return await queryCatcher(
            db.query, 
            "deleteProduct"
        )(deleteOneProduct({ref}))
    
};

module.exports = {
    getOneProduct, 
    getAllProducts,
    createProducts,
    updateProduct,
    deleteProduct,
}
