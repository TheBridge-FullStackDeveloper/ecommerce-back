const { sql } = require("slonik");

const selectOneProduct = ({productId}) =>{
    return sql `
        SELECT * FROM products 
        WHERE ProductID = ${productId};
    `
};

const selectAllProducts = () =>{
    return sql `
        SELECT * FROM products
    `;
};

const insertOneProduct = ({productId, category, name, price, quantity, img, details, rate}) =>{
    return sql`
        INSERT INTO products(
            productId, category, name, price, quantity, img, details, rate
        ) VALUES(
            ${productId}, 
            ${category}, 
            ${name}, 
            ${price}, 
            ${quantity}, 
            ${img},
            ${details}, 
            ${rate}
        );
    `;
};

const updateOneProduct = ({productId, name, category }) => {

    return sql`
        UPDATE products
        SET Name = ${name} AND Category = ${category} AND Price = ${price} AND Quantity = ${quantity} AND Img = ${img} AND Detials = ${details} AND Rate =${rate}
        WHERE ProductID = ${productId}
    
    `
};

const deleteOneProduct = ({productId}) =>{

    return sql `
        DELETE FROM products
        WHERE ProductID = ${productId}
    `
}

module.exports= {
    selectOneProduct,
    selectAllProducts,
    insertOneProduct,
    updateOneProduct,
    deleteOneProduct, 
}


