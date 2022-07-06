const { sql } = require("slonik");

const selectOneProduct = ({ProductID}) =>{
    return sql `
        SELECT * FROM products 
        WHERE ProductID = ${ProductID};
    `
};

const selectAllProducts = () =>{
    return sql `
        SELECT * FROM products
    `;
};

const insertOneProduct = ({ProductID, Category, Name, Price, Quantity, Img, Details, Rate}) =>{
    return sql`
        INSERT INTO products(
            ProductID, Category, Name, Price, Quantity, Img, Details, Rate
        ) VALUES(
            ${ProductID}, 
            ${Category}, 
            ${Name}, 
            ${Price}, 
            ${Quantity}, 
            ${Img},
            ${Details}, 
            ${Rate}
        );
    `;
};

const updateOneProduct = ({ProductID, Name, Category }) => {

    return sql`
        UPDATE products
        SET Name = ${Name} AND Category = ${Category} AND Price = ${Price} AND Quantity = ${Quantity} AND Img = ${Img} AND Detials = ${Details} AND Rate =${Rate}
        WHERE ProductID = ${ProductID}
    
    `
};

const deleteOneProduct = ({ProductID}) =>{

    return sql `
        DELETE FROM products
        WHERE ProductID = ${ProductID}
    `
};

module.exports = {
    selectOneProduct,
    selectAllProducts,
    insertOneProduct,
    updateOneProduct,
    deleteOneProduct, 
}


