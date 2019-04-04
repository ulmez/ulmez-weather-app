module.exports.testus = function(req, res, next) {
    console.log('***********');
    console.log('Testus!!!!');
    console.log('***********');
    
    res.json({
        message: 'Testus!!!!'
    });
}