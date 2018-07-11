// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    const database = db.db('Users') // i was missing this Argument
    console.log('Connected to MongoDB server');

    // data.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     } else {
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // })

    // this code is for learning

    // database.collection('Users').insertOne({
    //     Name: 'Ahmed A. Alshammary',
    //     Age: 23,
    //     Likeprogramming: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to Creat the database');
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    // db.close();
    // console.log('Successfuly exiting the database');
});