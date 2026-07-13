const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const databaseURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(databaseURL , { useNewUrlParser : true, useUnifiedTopology: true}, (error,client)=>{
    if(error){
        return console.log('Connection Failed');
    }
    const db =  client.db(databaseName);

    // Insert One
    const insertPromise = db.collection('users').insertOne({
        name : 'Phoenix',
        age : 24
    });
    insertPromise.then((data)=>{
        console.log(data.ops);
    }).catch((err)=>{
        console.log('Error Occurred')
    });

    // Insert Many
    db.collection('users').insertMany([{
        name : 'Pratyush',
        age : 27
    },{
        name : 'John',
        age : 26
    }], (error,result)=>{
        if(error){
            return console.log('Error Occurred');
        }
        console.log(result.ops);
    });

    // Find One
    db.collection('users').findOne({ _id : new ObjectID('5f5e0116a6fda72dec2bd2e5')}, (error, result)=>{
        if(error){
            return console.log('Error Occurred');
        }
        console.log(result);
    });

    // Find
    db.collection('users').find({ age : 27 }).toArray((error, result)=>{
        if(error){
            return console.log('Error Occurred');
        }
        console.log(result);
    }); 
    
    db.collection('users').find({ age : 27 }).count((error, result)=>{
        if(error){
            return console.log('Error Occurred');
        }
        console.log(result);
    });  

    // Update One
    const updatePromise = db.collection('users').updateOne({ age : 27},{
        $set : {
            name : 'Cypher'
        },
        $inc : {
            age : 1
        }
    });
    updatePromise.then((data)=>{
        console.log(data.modifiedCount);
    }).catch((error)=>{
        console.log(error);
    });

    // Update Many
    const updateManyPromise = db.collection('users').updateMany({ age : 27},{
        $set : {
            name : 'Raze'
        }
    });
    updateManyPromise.then((data)=>{
        console.log(data.modifiedCount);
    }).catch((err)=>{
        console.log(err)
    });

    // Delete One
    db.collection('users').deleteOne({
        name : 'Roop'
    }).then((data)=>{
        console.log(data.deletedCount);
    }).catch((err)=>{
        console.log('Error Occurred');
    });

    // Delete Many
    db.collection('users').deleteMany({
        name : 'Raze'
    }).then((data)=>{
        console.log(data.deletedCount);
    }).catch((err)=>{
        console.log('Error Occurred');
    });
});