var mongoose = require('mongoose');


var Users = mongoose.model('Users', { //verfing model to the mongoose
    username: {
        type: String, //type of the property
        required: true, // the property most be filled
        minlength: 8, // minimum length to the property
        trim: true // triming the begning of the property value to minimize space and make sure that the message is not empty
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 5 // the default value for the property
    },
});

module.exports = { Users };