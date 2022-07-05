module.exports = () => async (req, res, next) => {//pendiente pasar (db)

    console.log( req.body )
    
    res.status(200).json({
        success: true,
        message: 'Test Cretate Product',
      });
}