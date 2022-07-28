const { sql } = require("slonik");

const selectOneProduct = ({ref}) =>{
    console.log(ref)
    try {
        return sql `
        SELECT * FROM products 
        WHERE ref = ${ref};
    `
    } catch (error) {
        console.log(error)
        console.log(error.message)
    }

};

const selectAllProducts = () =>{
    return sql `
    SELECT ref, products.name, price, stock, img, details, rate, categories.name FROM products
    JOIN categories
    ON products.category_id = categories.id
    `;
};

const insertOneProduct = ({ref, name, price, stock, img, details, rate, category_id}) =>{
   
    return sql`
        INSERT INTO products(
            ref, name, price, stock, img, details, rate, category_id
        ) VALUES(
            ${ref}, 
            ${name}, 
            ${price}, 
            ${stock}, 
            ${img},
            ${details}, 
            ${rate},
            ${category_id}
        );
    `;
};

const updateOneProduct = ({productId, category, name, price, quantity, img, details, rate }) => {

    return sql`
        UPDATE products
        SET name = ${name}, category = ${category}, price = ${price}, quantity = ${quantity}, img = ${img}, details = ${details}, rate =${rate}
        WHERE productId = ${productId}
    
    `
};

const deleteOneProduct = ({productId}) =>{

    return sql `
        DELETE FROM products
        WHERE productId = ${productId}
    `
}

module.exports= {
    selectOneProduct,
    selectAllProducts,
    insertOneProduct,
    updateOneProduct,
    deleteOneProduct, 
}


