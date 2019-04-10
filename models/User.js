var mongoose = require('../db');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstname: {type: String, required: true, unique: false},
    surname: {type: String, required: true, unique: false},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, select: false}
}, {collection: 'users'});

var User = mongoose.model('User', userSchema);

module.exports = User;