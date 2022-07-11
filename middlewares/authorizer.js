const { deserialize } = require("../utils");
// const errors = require("../errors/commons"); //en cuanto tengamos los errors

module.exports = (req, res, next) => {
  const payload = deserialize(req);

  if (!payload) return next(errors[401]);

  res.locals = { ...payload };

  next();
};