const { sql } = require("slonik");

const selectOneOrder = ({ orderId }) => {
  return sql`
        SELECT *
        FROM orders
        WHERE Id = ${orderId};
    `;
};

const selectAllOrders = () => {
  return sql`
  SELECT *
  FROM orders; 
  `;
};

const insertOneOrder = ({ quantity, sellId, product }) => {
  return sql`
  INSERT INTO orders (
    quantity, sellId, productId
) VALUES (
    ${quantity}, 
    (SELECT sellId
     FROM sells
    WHERE id = ${sellId}  ),
      (SELECT productId
        FROM products
        WHERE name = ${product} )
);
  `;
};

const deleteOneOrder = ({ orderId }) => {
  return sql`
      DELETE FROM orders
      WHERE id = ${orderId}
  `;
};

module.exports = {
  selectOneOrder,
  selectAllOrders,
  insertOneOrder,
  deleteOneOrder,
};