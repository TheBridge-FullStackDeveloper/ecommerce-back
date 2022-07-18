const { selectFullUser, insertUser } = require("./queries");
const { queryCatcher } = require("../utils");

const getFullUser =
  (db) =>
  async ({ email }) => {
    return await queryCatcher(
      db.maybeOne,
      "getFullUser"
    )(selectFullUser({ email }));
  };

const createUser =
  (db) =>
  async ({ email, password, first_name, address, role }) => {
    const user = await getFullUser(db)({ email });

    if (user.data)
      return {
        ok: false,
        code: "duplication",
      };

    return await queryCatcher(
      db.query,
      "createUser"
    )(insertUser({ email, password, first_name, address, role }));
  };


  module.exports = {
    getFullUser,
    createUser,
  };