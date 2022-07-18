const {
  selectAllOrders,
  selectOneOrder,
  insertOneOrder,
  deleteOneOrder,
} = require("./queries");

// Querie para coger todos los Productos
const getAllOrders = (db) => async () => {
  return await queryCatcher(db.maybeOne, "getAllOrders")(selectAllOrders());
};
// Querie para coger un único producto: Me viene bien para luego hacer el Update de ese producto

const getOneOrder =
  (db) =>
  async ({ id }) => {
    return await queryCatcher(
      db.maybeOne,
      "getOneOrder"
    )(selectOneOrder({ id }));
  };
const getFullOrders =
  (db) =>
  async ({ email, products }) => {
    return await queryCatcher(
      db.maybeOne,
      "getFullOrders"
    )(selectAllOrders({ email, products }));
  };
const createOrder =
  (db) =>
  async ({ email, products }) => {
    //1. recibes en la funcion mail de usuario y lista de productos

    //2. por cada producto llamar query insertoneOrder
    //   a la q le pasamos nombre producyo, cantidad de ese producto e mail de usuario
    const { product, quantity } = products[0];
    return await queryCatcher(
      db.query,
      "createOrder"
    )(insertOneOrder({ products, quantity, email }));
  };

const deleteOrder =
  (db) =>
  async ({ id }) => {
    const order = await getOneOrder(db)({ id });

    if (!order.data)
      return {
        ok: false,
        code: "Order doesnt exist",
      };

    return await queryCatcher(db.query, "deleteOrder")(deleteOneOrder({ id }));
  };

module.exports = {
  getAllOrders,
  getOneOrder,
  createOrder,
  deleteOrder,
};
