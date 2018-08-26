var mongoose = require('mongoose');
mongoose.Promise = global.Promise; //global promise identfier
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'); //connect to the database

module.exports = { mongoose };