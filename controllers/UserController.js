var jwt = require('jsonwebtoken');
var jwtBlacklist = require('jwt-blacklist')(jwt);
var bcrypt = require('bcrypt');

var User = require('../models/User');

module.exports.register_user = function(req, res, next) {
    User.find({
        username: req.body.email
    })
    .exec()
    .then((user) => {
        if(user.length >= 1) {
            return res.status(409).json({
                message: 'Username exists already'
            });
        } else if(req.body.password.length < 6) {
            return res.status(409).json({
                message: 'Password must have at least 6 characters'
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    var itemUser = {
                        firstname: req.body.firstname,
	                    surname: req.body.surname,
                        email: req.body.email,
                        password: hash
                    };

                    const userObj = new User(itemUser);

                    userObj.save((err) => {
                        if (err) {
                            return res.status(500).json({
                                message: err
                            });
                        }

                        return res.status(200).json({
                            message: userObj
                        });
                    });
                }
            });
        }
    });
}

module.exports.authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwtBlacklist.verify(token, process.env.JWT_KEY);
        
        res.status(200).json(decoded);
    } catch(err) {
        res.status(401).json({
            message: 'Authorization failed'
        });
    }
}