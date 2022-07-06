const { selectAllProducts } = require("./queries"); 

// Querie para coger un único producto: Me viene bien para luego hacer el Update de ese producto

const getOneProduct = (db) => async({ProductID}) =>{
    return await queryCatcher(
        db.maybeOne,
        "getOneProduct"
    )(selectOneProduct({ProductID}))
};

// Querie para coger todos los Productos 
const getAllProducts = (db) => 
    async() =>{

    return await queryCatcher(
        db.maybeOne, 
        "getAllProducts"
    )(selectAllProducts());
};


// Querie para crear un producto
const createProducts = (db) => 
    async({ProductID, Category, Name, Price, Quantity, Img, Details, Rate}) =>{

    return await queryCatcher(
        db.query, 
        "createProducts"
    )(insertOneProduct({ 
        ProductID,
        Category, 
        Name, 
        Price, 
        Quantity, 
        Img, 
        Details, 
        Rate
    }
    ));
};

// Querie para hacer Update de un Producto: Aquí tengo mas dudas de los argumentos que paso 

const updateProduct = (db) => async({ProductID}) =>{
    const product = await getOneProduct(db)({ProductID});

    if(!product.data)
        return {
            ok: false,
            code:"Product doesnt exist"
        };

        return await queryCatcher(
            db.query, 
            "updateProduct"
        )(updateOneProduct({ProductID, Category, Name, Price, Quantity, Img, Details, Rate}))
    
};

// Delete a Product 
const deleteProduct = (db) => async({ProductID}) =>{
    const product = await getOneProduct(db)({ProductID});

    if(!product.data)
        return {
            ok: false,
            code:"Product doesnt exist"
        };

        return await queryCatcher(
            db.query, 
            "deleteProduct"
        )(deleteOneProduct({ProductID}))
    
};

module.exports {
    getOneProduct, 
    getAllProducts,
    createProducts,
    updateProduct,
    deleteProduct,
}
