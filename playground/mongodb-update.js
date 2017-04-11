// const MongoClient = require(`mongodb`).MongoClient;
const {MongoClient, ObjectID} = require(`mongodb`);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');

  //findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58ece44e7907b4b4f2c7c1e7')
  }, {
    $set: {
      name: 'Yvan'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
