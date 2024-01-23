const { MongoClient, ServerApiVersion } = require("mongodb");
// const Db = process.env.ATLAS_URI;
const Db = "mongodb+srv://b-forster:i2RdzyJ4QZ4xOnMj@dnd-archivist.rlmofac.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(Db, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function connectToServer() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("db").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (err) {
        console.log(err)
        await client.close();
    }
}


function getDb() {
    return client.db("db");
}

module.exports = {
    connectToServer,
    getDb,
}

// let _db;

// module.exports = {
//     connectToServer: async function (callback) {
//         console.log('test')
//         try {
//             await client.connect(function (err, db) {
//                 console.log("*************************************")
//                 // Verify we got a good "db" object
//                 if (db) {
//                     _db = db.db("dnd-archivist");
//                     console.log("Successfully connected to MongoDB.");
//                 }
//                 return callback(err);
//             });
//         } catch (e) {
//             console.error(e);
//         }

//         // await client.connect(function (err, db) {

//         //     // Verify we got a good "db" object
//         //     if (db) {
//         //         _db = db.db("Characters");
//         //         console.log("Successfully connected to MongoDB.");
//         //     }
//         //     return callback(err);
//         // });

//         return (_db !== undefined);
//     },

//     getDb: function () {
//         return _db;
//     },
// };