const router = require("express").Router();
const { authorizer, checker } = require("../../middlewares");

const forms = {
  register: ['email', 'password', 'first_name', 'role'],
  login: ['email', 'password']
}
const type = "register"
module.exports = (db) => {
  router.post("/register", checker(type,...forms.register), require("./register")(db));
  //router.post("/login", checker(...forms.login), require("./login")(db));
  //router.post("/logout", authorizer, require("./logout")());

  return router;
};
