const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://<host>:<port>/';
const dbName = 'mydb';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  console.log("Connected to MongoDB database");
});