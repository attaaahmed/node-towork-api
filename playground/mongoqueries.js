const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/Todo');
const { ObjectID } = require('mongodb');
var id = '5b5daefaa5d39c1b2744bf2311'; // this id is for quering 

if (!ObjectID.isValid(id)) {
    console.log('Id is not valid')
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     if (!todos) {
//         return console.log('Id not found');
//     }
//     console.log('Todos are ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo is ', todo);
// });

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log(todo);
}).catch((e) => { console.log('error message is', e); });