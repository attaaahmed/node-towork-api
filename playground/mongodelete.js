// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb'); //verfying the database objects
//connect to the database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    //error handler
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    //mongo veryfier to the use inside the program
    const database = db.db('Users') // i was missing this Argument
    console.log('Connected to MongoDB server');

    //delelte many
    // database.collection('Users').deleteMany({ Likeprogramming: false }).then((result) => {
    //     console.log(result);
    // });

    //delete one
    // database.collection('Maintainer').deleteOne({ Name: 'Ahmed A. Alshammary' }).then((result) => {
    //     console.log(result);
    // });

    //find and delete

    // database.collection('Maintainer').findOneAndDelete({ Likeprogramming: false }).then((result) => {
    //     console.log(result);
    // });

    // database.collection('Users').deleteMany({ Name: 'Ahmed A. Alshammary' });

    // database.collection('Maintainer').findOneAndDelete({ _id: new ObjectID("5b467bd4627d0617ebee24aa") }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 3));
    // })

    //db.close();
});