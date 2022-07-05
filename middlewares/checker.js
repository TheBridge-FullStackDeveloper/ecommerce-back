module.exports = (...fields) => (req, res, next) => {
    for(const field of fields) {
        if(!req.body[field]) return next("error en los campos") //pendiente pasar codig de error cuando est'en hechos
    }

    next()
}