
module.exports = () => async (req, res, next) => {//pendiente pasar (db)
    
    res.status(200).json({
        success: true,
        message: 'Test Get-all',
      });
}