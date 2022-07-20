const { sql } = require("slonik");

const selectOneOrder = ({ sell_id }) => {
  return sql`
        SELECT *
        FROM orders
        WHERE sell_id = ${sell_id};
        `;
  //pendiente de confirmar referencia
};

const selectAllOrders = () => {
  return sql`
  SELECT *
  FROM orders; 
  `;
};

const insertOneOrder = ({ quantity, sell_id, product_id }) => {
  return sql`
  INSERT INTO orders (
    quantity, sell_id, product_id
) VALUES (
    ${quantity}, 
    (SELECT id
     FROM sells
    WHERE id = ${sell_id}  ),
      (SELECT id
        FROM products
        WHERE id = ${product_id} )
);
  `;
};

const deleteOneOrder = ({ sell_id }) => {
  return sql`
      DELETE FROM orders
      WHERE sell_id = ${sell_id}
  `; //pendiente de confirmar referencia
};

module.exports = {
  selectOneOrder,
  selectAllOrders,
  insertOneOrder,
  deleteOneOrder,
};
