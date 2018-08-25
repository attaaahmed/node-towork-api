var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', { //verfing model to the mongoose
    text: {
        type: String,
        required: true, // the property most be filled
        minlength: 4, // minimum length to the property
        trim: true // triming the begning of the property value to minimize space and make sure that the message is not empty
    },
    completed: {
        type: Boolean,
        default: false // the default value for the property
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = { Todo };