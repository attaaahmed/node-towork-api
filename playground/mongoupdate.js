// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb'); //verfying the database objects
//connect to the database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    //error handler
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    //mongo veryfier to the use inside the program
    // const database = db.db('Users') // i was missing this Argument
    // console.log('Connected to MongoDB server');

    //find and update values
    // database.collection('Maintainer').findOneAndUpdate({ _id: new ObjectID('5b46aa85e8cda15d73032480') }, { $set: { Age: 23, typeoflanguage: 'Mongodb' } }, { returnOriginal: false }).then((result) => {
    //     console.log(result);
    // });

    //db.close();
});