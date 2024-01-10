const { MongoClient } = require('mongodb')

let dbConnection;

module.exports = {
    connect_to_DB: (cb)=>{
        MongoClient.connect('mongodb://localhost:27017/note_db')
        .then((client)=>{
            dbConnection = client.db()
            return cb();
        })
        .catch(err=>{
            console.log("ERRRRR Connecting to MongoClient !!!")
            return cb(err)
        })
    },
    get_DB: () => dbConnection
};
