const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/Todo');
var { Users } = require('./models/Users');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());



app.post('/todos', (req, res) => { //connect to the url and read the post from the source
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.status(200).send(doc); // send status 200 and the data when the database worked successfully
    }, (e) => {
        res.status(400).send(e); // send the error status when there is a wrong post state
    });
});

app.get('/todos', (req, res) => { // sending all items
    Todo.find().then((todos) => {
        res.send({ todos }); // using an obj to add more properties to the obj after sending it
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => { // finding the item by ID
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send(); // sending the state of the data 
    } else if (ObjectID.isValid(id)) { 
        Todo.findById(id).then((todo) => {
            if (todo) {
                res.status(200).send({todo});
            } else if (!todo) {
                res.status(404).send();
            }
        }).catch((e) => { res.status(400).send(e); });
    }
});


app.delete('/todos/:id', (req,res) => {  // deleting the items by ID
var id = req.params.id;
if(!ObjectID.isValid(id)) {
return res.status(400).send();
} else if (ObjectID.isValid(id)){
    Todo.findByIdAndRemove(id).then((todo) => {
        if (todo) {
            res.status(200).send({todo});
        } else if (!todo) {
            res.status(404).send();
        }
    }).catch((e) => {res.status(400).send()})
}
});


app.patch('/todos/:id', (req,res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return req.status(404).send();
    }

    if(_._.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false ;
        body.completedAt = null ;
    }

    Todo.findByIdAndUpdate(id ,{$set: body} , {new: true}).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        } else if (todo){
            res.status(200).send({todo});
        }

    }).catch((e)=> {
        res.status(400).send();
    } );
});

app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
});

module.exports = { app };