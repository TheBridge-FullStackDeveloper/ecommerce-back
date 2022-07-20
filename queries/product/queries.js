const { sql } = require("slonik");

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
