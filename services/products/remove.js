module.exports = (db) => async (req, res, next) => {

    console.log( req.body )
    
    res.status(200).json({
        success: true,
        message: 'Test Remove Product',
      });
}