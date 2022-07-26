const { sql } = require("slonik");

const selectOneProduct = ({ref}) =>{
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
        SELECT * FROM products
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

const updateOneProduct = ({ref, name, price, stock, img, details, rate, category_id}) => {

    return sql`
        UPDATE products
        SET name = ${name}, price = ${price}, stock = ${stock}, img = ${img}, details = ${details}, rate =${rate}, category_id = ${category_id}
        WHERE ref = ${ref}
    
    `
};

const deleteOneProduct = ({ref}) =>{

    return sql `
        DELETE FROM products
        WHERE ref = ${ref}
    `
}

module.exports= {
    selectOneProduct,
    selectAllProducts,
    insertOneProduct,
    updateOneProduct,
    deleteOneProduct, 
}


