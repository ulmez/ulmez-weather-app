require('dotenv').config();

var mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect(`${process.env.DB_HOST}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds046067.mlab.com:46067/${process.env.DB_NAME}`, { useNewUrlParser: true });

module.exports = mongoose;