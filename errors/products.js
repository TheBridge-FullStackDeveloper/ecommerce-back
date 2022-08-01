module.exports = {
    400: {
        statusCode: 400,
        error: new Error("something went wrong"),
      },
    401: {
      statusCode: 401,
      error: new Error("Error while removing product"),
    },
    402: {
      statusCode: 402,
      error: new Error("Product not found"),
    },
    403: {
      statusCode: 403,
      error: new Error("Error updating product"),
    },
    404: {
      statusCode: 404,
      error: new Error("Duplicated Product"),
    }
  };