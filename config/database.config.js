// module.exports = {
//   url: "mongodb+srv://dahri:dahri2021@cluster0.unjrx.mongodb.net/mydb?retryWrites=true&w=majority",  useNewUrlParser: true, useUnifiedTopology: true 
// }


module.exports = {
    url: 'mongodb+srv://dahri:dahri2021@cluster0.unjrx.mongodb.net/mydb?retryWrites=true&w=majority'
}

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://ah-user:ah-user@cluster0.y8kt0.mongodb.net/test-crud?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();