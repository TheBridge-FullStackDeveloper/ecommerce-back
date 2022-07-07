const { sql } = require("slonik");

const selectOneProduct = ({id}) =>{
    return sql `
        SELECT * FROM products 
        WHERE id = ${id};
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
            id, category, name, price, quantity, img, details, rate
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

const updateOneProduct = ({id, category, name, price, quantity, img, details, rate }) => {

    return sql`
        UPDATE products
        SET name = ${name}, category = ${category}, price = ${price}, quantity = ${quantity}, img = ${img}, details = ${details},rate =${rate}
        WHERE id = ${id}
    
    `
};

const deleteOneProduct = ({id}) =>{

    return sql `
        DELETE FROM products
        WHERE id = ${id}
    `
}

module.exports= {
    selectOneProduct,
    selectAllProducts,
    insertOneProduct,
    updateOneProduct,
    deleteOneProduct, 
}


