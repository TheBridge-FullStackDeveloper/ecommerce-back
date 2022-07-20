const router = require("express").Router();
const { authorizer, checker } = require("../../middlewares");

const forms = {
  register: ['email', 'password', 'first_name', 'role'],
  login: ['email', 'password']
}
const type = { register: "register", login: "login" }

module.exports = (db) => {
  router.post("/register", checker(type.register,...forms.register), require("./register")(db));
  router.post("/login", checker(type.login,...forms.login), require("./login")(db));
  //router.post("/logout", authorizer, require("./logout")());

  return router;
};
