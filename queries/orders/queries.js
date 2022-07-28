const { sql } = require("slonik");

const selectOneOrder = ({ sell_id }) => {
  return sql`
  SELECT *
  FROM orders
  JOIN products
  ON orders.product_id = products.id
  JOIN sells
  ON orders.sell_id = sells.id
  WHERE sell_id = ${sell_id};
    `; 
};

const selectAllOrders = () => {
  return sql`
  SELECT * FROM orders;`;
};

const insertOneOrder = ({ quantity, sell_id, product_id }) => {
 // console.log(quantity, sell_Id, product_id)
  return sql` INSERT INTO orders (quantity, sell_id, product_id) 
  VALUES (${quantity}, (SELECT id FROM sells WHERE id = ${sell_id}),
  (SELECT id FROM products WHERE id = ${product_id}));
  `;
};

const deleteOneOrder = ({ sell_id }) => {
  console.log(sell_id )
  return sql`
      DELETE FROM orders
      WHERE sell_id = ${sell_id}
  `; // ver si dejamos sell_id o cambiamos a otra ref
};

module.exports = {
  selectOneOrder,
  selectAllOrders,
  insertOneOrder,
  deleteOneOrder,
};
