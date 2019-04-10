var jwt = require('jsonwebtoken');
var jwtBlacklist = require('jwt-blacklist')(jwt);
var bcrypt = require('bcrypt');

var User = require('../models/User');

module.exports.register_user = function(req, res, next) {
    // console.log('Gick in?');
    // res.status(200).json({message: 'Success!!!!'});
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
                        if (err) return res.status(500).json({message: err});
                        return res.status(200).json({message: userObj});
                    });
                
                    // var itemPerson = {
                    //     first_name: req.body.first_name,
                    //     last_name: req.body.last_name,
                    //     social_security_number: req.body.social_security_number,
                    //     address: req.body.address,
                    //     postal_code: req.body.postal_code,
                    //     phone_home: req.body.phone_home,
                    //     phone_mobile: req.body.phone_mobile,
                    //     email: req.body.email,
                    //     user_id: {$ojFuture: "0._id"}
                    // };
                
                    // task
                    // .save(User, itemUser)
                    // .save(Person, itemPerson)
                    // .run({useMongoose: true})
                    // .then(function(results){
                    //     res.json({
                    //         message: results
                    //     });
                    // })
                    // .catch(function(err) {
                    //     res.json({
                    //         message: err
                    //     });
                    // });
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