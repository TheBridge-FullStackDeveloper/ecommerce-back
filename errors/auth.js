module.exports = {

    login: {
      unknown: {
        statusCode: 400,
        error: new Error("user or password incorrect"),
      },
      empty: {
        statusCode: 400,
        error: new Error("all fields are mandatory"),
      },
    },
    register: {
      duplication: {
        statusCode: 400,
        error: new Error("user already exists"),
      },
      empty: {
        statusCode: 400,
        error: new Error("these fields are mandatory"),
      },
    },
  };