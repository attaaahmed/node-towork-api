const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/Todo');
const { ObjectID } = require('mongodb');


//Todo.remove({}).then((result) => {
//console.log(result);
//}); // don't send the deleted data to the user

//Todo.findOneAndRemove({}).then(() => { 

//}); // find one and delete it , sending back the deleted data to the user

Todo.findByIdAndRemove('5b83a44190f2e9173034a69e').then((result) => {
console.log(result)
}); //find the row and delete it by the id , sending back the deleted data to the user 