module.exports = {
    400: {
        statusCode: 400,
        error: new Error("something went wrong"),
      },
    404: {
      statusCode: 404,
      error: new Error("Duplicated Product"),
    }
  };