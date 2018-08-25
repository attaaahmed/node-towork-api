var mongoose = require('mongoose');
mongoose.Promise = global.Promise; //global promise identfier
mongoose.connect('mongodb://localhost:27017/TodoApp'); //connect to the database

module.exports = { mongoose };