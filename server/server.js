var express = require('express');
var bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/Todo');
var { Users } = require('./models/Users');

var app = express();

app.use(bodyParser.json());



app.post('/todos', (req, res) => { //connect to the url and read the post from the source
    var todo = new Todo({
        text: req.body.text, // reading the text in the post 
    });
    todo.save().then((doc) => {
        res.status(200).send(doc); // send status 200 and the data when the database worked successfully
    }, (e) => {
        res.status(400).send(e); // send the error status when there is a wrong post state
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos }); // using an obj to add more properties to the obj after sending it
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    } else if (ObjectID.isValid(id)) {
        Todo.findById(id).then((todo) => {
            if (todo) {
                res.status(200).send(todo);
            } else if (!todo) {
                res.status(404).send();
            }
        }).catch((e) => { res.status(400).send(e); });
    }
});


app.listen(3000, () => {
    console.log('Server up and running on port 3000');
});

module.exports = { app };