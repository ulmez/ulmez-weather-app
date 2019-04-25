var jwt = require('jsonwebtoken');
var jwtBlacklist = require('jwt-blacklist')(jwt);
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');

var User = require('../models/User');

module.exports.get_user = function(req, res, next) {
    User.find({
        _id: req.body.id
    })
    .exec()
    .then((user) => {
        console.log(user);

        res.status(200).json({
            message: user
        });
    }).catch((err) => {
        console.log(err);
    });
}

module.exports.register_user = function(req, res, next) {
    User.find({
        email: req.body.email
    })
    .exec()
    .then((user) => {
        if(user.length >= 1) {
            return res.status(409).json({
                message: 'Email exists already'
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

module.exports.login_user = (req, res, next) => {
    User.find({
        email: req.body.email
    })
    .select('+password')
    .exec()
    .then((users) => {
        if(users.length < 1) {
            return res.status(401).json({
                message: 'Authorization failed'
            });
        }
        
        bcrypt.compare(req.body.password, users[0].password, (err, result) => {
            if(err) {
                return res.status(401).json({
                    message: 'Authorization failed'
                });
            }
            
            if(result) {
                const token = jwtBlacklist.sign({
                    email: users[0].email,
                    userId: users[0]._id
                },
                process.env.JWT_KEY,
                {
                    expiresIn: "1h"
                });
                
                return res.status(200).json({
                    message: 'Authorization successful',
                    token: token
                });
            }

            res.status(401).json({
                message: 'Authorization failed'
            });
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            error: err
        });
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

module.exports.logout_user = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        
        jwtBlacklist.blacklist(token);
        
        res.status(200).json({
            message: 'Token blacklisted'
        });
    } catch(err) {
        res.status(401).json({
            message: 'Authorization failed'
        });
    }
};

module.exports.edit_list = (req, res, next) => {
    // const mongoose = require('mongoose');
    // const listId = mongoose.Types.ObjectId();
    // const userObj = new User();
    const id = mongoose.Types.ObjectId(req.body.id);
    const listId = mongoose.Types.ObjectId(req.body.listId);
    const arrlistItem = req.body.weathers;

    User.update(
        {
            _id: id,
            'weatherLists.listId': listId
        },
        {
            $set:
            {
                'weatherLists.$.weathers': arrlistItem
            }
        }
    )
    .exec()
    .then(function(result) {
        res.json({
            message: result
        });
    })
    .catch(function(err) {
        res.json({
            message: err
        });
    });
};

module.exports.add_list = (req, res, next) => {
    // const mongoose = require('mongoose');
    const id = mongoose.Types.ObjectId(req.body.id);
    const listId = mongoose.Types.ObjectId();
    const arrlistItem = req.body.weathers;

    User.update(
        {
            _id: id
        },
        {
            $push:
            {
                weatherLists: {
                    listId: listId,
                    weathers: arrlistItem
                }
            }
        }
    )
    .exec()
    .then(function(result) {
        res.json({
            message: result
        });
    })
    .catch(function(err) {
        res.json({
            message: err
        });
    });
};

module.exports.delete_list = (req, res, next) => {
    // const mongoose = require('mongoose');
    const id = mongoose.Types.ObjectId(req.body.id);
    const listId = mongoose.Types.ObjectId(req.body.listId);

    User.update( 
        {
            _id: id
        },
        {
            $pull: {
                weatherLists: {
                    listId: listId
                }
            }
        }
    )
    .exec()
    .then(function(result) {
        res.json({
            message: result
        });
    })
    .catch(function(error) {
        res.json({
            message: error
        });
    });
};