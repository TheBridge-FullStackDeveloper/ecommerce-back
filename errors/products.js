module.exports = {
    400: {
        statusCode: 400,
        error: new Error("something went wrong"),
      },
    401: {
      statusCode: 401,
      error: new Error("Duplicated Product"),
    },
    402: {
      statusCode: 402,
      error: new Error("Product not found"),
    }
  };