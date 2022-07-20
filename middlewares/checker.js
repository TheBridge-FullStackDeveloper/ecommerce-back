const errors = require("../errors/auth"); 

module.exports = (type,...fields) => (req, res, next) =>{
    for(const field of fields) {
        if(!req.body[field]) return next(errors[type]["empty"])
    }
    next();
};
