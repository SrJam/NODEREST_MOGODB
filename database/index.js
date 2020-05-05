const mongoose = require('../database');

mongoose.connect('mongodb://localhost/noderest', { useMongoCLient: true} );
mongoose.Promise = global.Promise;

module.exports = mongoose;