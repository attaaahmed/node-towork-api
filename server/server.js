var mongoose = require('mongoose');
mongoose.Promise = global.Promise; //global promise identfier
mongoose.connect('mongodb://localhost:27017/TodoApp'); //connect to the database


// var Todo = mongoose.model('Todo', { //verfing model to the mongoose
//     text: {
//         type: String,
//         required: true, // the property most be filled
//         minlength: 8, // minimum length to the property
//         trim: true // triming the begning of the property value to minimize space and make sure that the message is not empty
//     },
//     completed: {
//         type: Boolean,
//         default: false // the default value for the property
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// var data = new Todo({ //constract the data from the todo model
//     text: '     save the day    '
// });

// data.save().then((doc) => { //saving the data
//     console.log('the Data that you saved', doc);
// }, (e) => {
//     console.log('Unable to save the data to the database')
// });

// var data = new Todo({ //the save for one property of the mongoose model
//     text: 'Learned mongoose',
//     completed: true,
//     completedAt: 0537
// });

// data.save().then((doc) => { // the saving for the new full model of the mongoose
//     console.log('The data that you saved is', doc);
// }, (e) => {
//     console.log('Unable to save data', e);
// });