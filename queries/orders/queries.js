const { sql } = require("slonik");

const selectOneOrder = ({ orderId }) => {
  return sql`
        SELECT *
        FROM orders
        WHERE orderId = ${orderId};
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
    quantity, userId, productId
) VALUES (
    ${quantity},
    (SELECT id
     FROM sells
    WHERE email = ${sellId}  ),
      (SELECT productId
        FROM products
        WHERE name = ${product} )
);
  `;
};

const deleteOneOrder = ({ orderId }) => {
  return sql`
      DELETE FROM orders
      WHERE orderId = ${orderId}
  `;
};

module.exports = {
  selectOneOrder,
  selectAllOrders,
  insertOneOrder,
  deleteOneOrder,
};