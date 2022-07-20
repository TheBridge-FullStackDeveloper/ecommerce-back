const { selectAllOrders, selectOneOrder,insertOneOrder, deleteOneOrder } = require("./queries");
const { queryCatcher } = require("../utils")

  // Querie para coger todos los Productos
  const getAllOrders = (db) => async () => {
    return await queryCatcher(db.maybeOne, "getAllOrders")(selectAllOrders());
  };


  // Querie para coger un único producto: Me viene bien para luego hacer el Update de ese producto
  const getOneOrder =
    (db) =>
    async ({ sellId }) => {
      return await queryCatcher(
        db.maybeOne,
        "getOneOrder"
      )(selectOneOrder({ sellId }));
    };


  const createOrder = (db) => async (orders) => {
      //({ quantity, sellId, productId  })//
      //1. recibes en la funcion mail de usuario y lista de productos
      //2. por cada producto llamar query insertoneOrder
      //   a la q le pasamos nombre producyo, cantidad de ese producto e mail de usuario
      //const { quantity, sellId, productId  } = products[0];
      //recibimos un array?



       const resultOrders = orders.map((e)=>{
          //console.log(e.quantity, e.sell_id, e.product_id)
          const quantity = e.quantity;
          const sell_id = e.sell_id;
          const product_id = e.product_id;
          return queryCatcher(
            db.query,
            "createOrder"
          )(insertOneOrder({ quantity, sell_id, product_id }));
        })

        return Promise.all(resultOrders)

      


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