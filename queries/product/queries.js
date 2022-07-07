const { sql } = require("slonik");

const selectOneProduct = ({id}) =>{
    return sql `
        SELECT * FROM products 
        WHERE ProductID = ${id};
    `
};

const selectAllProducts = () =>{
    return sql `
        SELECT * FROM products
    `;
};

const insertOneProduct = ({id, category, name, price, quantity, img, details, rate}) =>{
    return sql`
        INSERT INTO products(
            productId, category, name, price, quantity, img, details, rate
        ) VALUES(
            ${id}, 
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

const updateOneProduct = ({id, name, category }) => {

    return sql`
        UPDATE products
        SET Name = ${name} AND Category = ${category} AND Price = ${price} AND Quantity = ${quantity} AND Img = ${img} AND Detials = ${details} AND Rate =${rate}
        WHERE ProductID = ${id}
    
    `
};

const deleteOneProduct = ({id}) =>{

    return sql `
        DELETE FROM products
        WHERE ProductID = ${id}
    `
}

module.exports= {
    selectOneProduct,
    selectAllProducts,
    insertOneProduct,
    updateOneProduct,
    deleteOneProduct, 
}


