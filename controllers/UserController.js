var jwt = require('jsonwebtoken');
var jwtBlacklist = require('jwt-blacklist')(jwt);
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');

var User = require('../models/User');

// Get info from one user in user table on id
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

// Registration of new user
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
            // Encryption of password
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    // User item to save
                    var itemUser = {
                        firstname: req.body.firstname,
	                    surname: req.body.surname,
                        email: req.body.email,
                        password: hash
                    };

                    // Instatiating user model
                    const userObj = new User(itemUser);

                    // Save the new user to table user
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

// Login of user
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
        
        // Check if valid password
        bcrypt.compare(req.body.password, users[0].password, (err, result) => {
            if(err) {
                return res.status(401).json({
                    message: 'Authorization failed'
                });
            }
            
            if(result) {
                // Set token
                const token = jwtBlacklist.sign({
                    email: users[0].email,
                    userId: users[0]._id
                },
                process.env.JWT_KEY,
                {
                    expiresIn: "1h"
                });
                
                // Return token
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

// Authenticate if token are still valid
module.exports.authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwtBlacklist.verify(token, process.env.JWT_KEY);
        
        // Return decoded token package
        res.status(200).json(decoded);
    } catch(err) {
        res.status(401).json({
            message: 'Authorization failed'
        });
    }
}

// Logout user
module.exports.logout_user = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        
        // Blacklisting token so it can not be used again
        // even if expiration time has not ended yet
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

// Edit specific weather list for a user
module.exports.edit_list = (req, res, next) => {
    const id = mongoose.Types.ObjectId(req.body.id);
    const listId = mongoose.Types.ObjectId(req.body.listId);
    const listName = req.body.listName;
    const arrlistItem = req.body.weathers;

    // Set edited weather list on specific weather list for the user
    User.update(
        {
            _id: id,
            'weatherLists.listId': listId
        },
        {
            $set:
            {
                'weatherLists.$.listName': listName,
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

// Add new weather list
module.exports.add_list = (req, res, next) => {
    const id = mongoose.Types.ObjectId(req.body.id);
    const listId = mongoose.Types.ObjectId();
    const listName = req.body.listName;
    const arrlistItem = req.body.weathers;

    // Push new weather list to specific user
    User.update(
        {
            _id: id
        },
        {
            $push:
            {
                weatherLists: {
                    listId: listId,
                    listName: listName,
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

// Delete specific weather list for a user
module.exports.delete_list = (req, res, next) => {
    // const mongoose = require('mongoose');
    const id = mongoose.Types.ObjectId(req.body.id);
    const listId = mongoose.Types.ObjectId(req.body.listId);

    // Pull specific weather list from specific user
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