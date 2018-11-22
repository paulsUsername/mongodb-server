// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',{ useNewUrlParser: true },(err, client) => {
    if (err) {
        return console.log(err, "Unable to connect to mongodb")
    }
    console.log('Connected to Mongodb server')


    const db = client.db('TodoApp');

    // db.collection('Users').insertOne()
    db.collection('Users').insertOne({
        name: 'Paul Finlay',
        age: 70
    },(err, result) => {
        console.log('Arrived')
        if (err) {
            return console.log('Unable to do insert', err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2)); 
        client.close();
    });

    // db.collection('Users').findOneAndReplace({
    //     name: 'Paul Finlay'
    // }, {
    //     name: 'Eimer O\'Malley',
    //     age: 32
    // },(err, result) => {
    //     console.log('Arrived')
    //     if (err) {
    //         return console.log('Unable to do insert', err)
    //     }
    //     console.log(JSON.stringify(result.value, undefined, 2)); 
    //     client.close();
    // });
});