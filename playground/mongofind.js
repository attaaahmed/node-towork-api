// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    const database = db.db('Users') // i was missing this Argument
    console.log('Connected to MongoDB server');

    // to find number of collections in the database
    // database.collection('Users').find({ Name: 'Ahmed A. Alshammary' }).count().then((count) => {
    //     console.log(`the users count: ${count}`);
    // }, (err) => {
    //     if (err) {
    //         console.log('Unable to fetch data form the users', err)
    //     }
    // })

    // to find a collection in the database

    // database.collection('Users').find({ Name: 'Ahmed A. Alshammary' }).toArray().then((docs) => {
    //     console.log('the users');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     if (err) {
    //         console.log('Unable to fetch data form the users', err)
    //     }
    // })

    // closeing the database
    // db.close();
    // console.log('Successfuly exiting the database');
});