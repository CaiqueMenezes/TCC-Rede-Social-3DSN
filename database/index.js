const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/swongs')
mongoose.Promise = global.Promise;

module.exports = mongoose;