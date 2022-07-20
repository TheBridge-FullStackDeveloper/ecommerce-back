const hash = require("./hash");
<<<<<<< HEAD
const cookie = require("./cookie");
=======
const cookie = require("./cookies");
>>>>>>> 671aec28c9115cc2986ebcbe461d6ed8755bde8a
const jwt =  require("./jwt");

const serialize = (res, payload) => {
    const token = jwt.sign(payload);
    cookie.create(res,token);
};

const deserialize = (req) => {
    const { access_token } = req.cookies;
  
    const payload = jwt.verify(access_token);
  
    if (!payload) return false;
  
    return payload;
  };
  

module.exports = {
    hash,
    cookie,
    jwt,
    serialize,
    deserialize,
}