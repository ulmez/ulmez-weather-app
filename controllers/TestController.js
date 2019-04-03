// var jwt = require('jsonwebtoken');
// var jwtBlacklist = require('jwt-blacklist')(jwt);
// var bcrypt = require('bcrypt');

// var User = require('../models/User');
// var Person = require('../models/Person');
// var Product = require('../models/Product');
// var task = require('../helpers/transaction').fawnTask();

module.exports.testus = function(req, res, next) {
    console.log('***********');
    console.log('Testus!!!!');
    console.log('***********');
    
    res.json({
        message: 'Testus!!!!'
    });
}