const {
  selectAllOrders,
  selectOneOrder,
  insertOneOrder,
  deleteOneOrder,
} = require("./queries");
const { queryCatcher } = require("../utils");

// Querie para coger todos los Productos
const getAllOrders = (db) => async () => {
  return await queryCatcher(db.query, "getAllOrders")(selectAllOrders());
};
// Querie para coger un único producto: Me viene bien para luego hacer el Update de ese producto

const getOneOrder =
  (db) =>
  async ({ sell_id }) => {
    return await queryCatcher(
      db.query,
      "getOneOrder"
    )(selectOneOrder({ sell_id }));
  };

const createOrder = (db) => async (orders) => {
  const resultOrders = orders.map((e) => {
    console.log(e.quantity, e.sell_id, e.product_id);
    const quantity = e.quantity;
    const sell_id = e.sell_id;
    const product_id = e.product_id;
    return queryCatcher(
      db.query,
      "createOrder"
    )(insertOneOrder({ quantity, sell_id, product_id }));
  });

  return Promise.all(resultOrders);
};

const deleteOrder =
  (db) =>
  async ({ sell_id }) => {
    const order = await getOneOrder(db)({ sell_id });

    if (!order.data)
      return {
        ok: false,
        code: "Order doesnt exist",
      };

    return await queryCatcher(
      db.query,
      "deleteOrder"
    )(deleteOneOrder({ sell_id }));
  };

module.exports = {
  getAllOrders,
  getOneOrder,
  createOrder,
  deleteOrder,
};
