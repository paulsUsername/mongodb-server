// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',{ useNewUrlParser: true },(err, client) => {

    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    };

    console.log('We are connected to mongodb');


    var db = client.db('TodoApp');


    db.collection('Users').findOneAndUpdate({
        name: "Mark Finlay"
    },{$inc : {'age': 1}}, {returnOriginal: false}).then((result) => {
        console.log(result);
        client.close();
    }, (rejected) => {
        console.log("Update to value was rejected", rejected);
    });

    //**********************Find via Object ID
    // db.collection('ToDos').find({
    //     _id: new ObjectID('5bf6ea341cc4efb5945784ee')
    // })
    // .toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     if (err) {
    //         console.log('Unable to fetch todos', err)
    //     }
    // });

    //**********************Get count of total documents */
    // db.collection('ToDos').find().count().then((count) => {
    //     console.log(`ToDos: count ${count}`)
    // }, (err) => {
    //     if (err) {
    //         console.log('Unable to fetch todos', err)
    //     }
    // });

    //**********************Find User with parameter */
    // db.collection('Users').find({
    //     name: "Paul Finlay"
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 4));
    //     if (docs) {
    //         client.close();
    //     }
    // }, (err) => {
    //     if (err) {
    //         console.log(`Error getting users from database with error: ${err}`)
    //     }
    // });


    //****************DELETE */
    // db.collection('Users').deleteOne({
    //     name: "Colm Finlay"
    // }).then((result) => {
    //     console.log(result.deletedCount)
    //     client.close();
    // }, (rejected) => {
    //     console.log(rejected)
    // });




//     client.close();
});