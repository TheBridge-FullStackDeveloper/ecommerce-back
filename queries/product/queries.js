const { sql } = require("slonik");

<<<<<<< HEAD
const selectAllProducts = () => {
  return sql`
        SELECT * FROM products
    `;
};
const selectOneProduct = ({ id }) => {
  return sql`
        SELECT * FROM products 
        WHERE id = ${id};
    `;
};

const insertOneProduct = ({
  id,
  category,
  name,
  price,
  quantity,
  img,
  details,
  rate,
}) => {
  return sql`
        INSERT INTO products(
            id, category, name, price, quantity, img, details, rate
        ) VALUES(
            ${id}, 
=======
const selectOneProduct = ({productId}) =>{
    return sql `
        SELECT * FROM products 
        WHERE productId = ${productId};
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
>>>>>>> 671aec28c9115cc2986ebcbe461d6ed8755bde8a
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

<<<<<<< HEAD
const updateOneProduct = ({ id, name, category }) => {
  return sql`
        UPDATE products
        SET name = ${name} AND category = ${category} AND price = ${price} AND quantity = ${quantity} AND img = ${img} AND Detials = ${details} AND rate =${rate}
        WHERE id = ${id}
    
    `;
};

const deleteOneProduct = ({ id }) => {
  return sql`
        DELETE FROM products
        WHERE id = ${id}
    `;
};

module.exports = {
  selectOneProduct,
  selectAllProducts,
  insertOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
=======
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


>>>>>>> 671aec28c9115cc2986ebcbe461d6ed8755bde8a
