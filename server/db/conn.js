const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri = process.env.ATLAS_URI;
const uri = "mongodb+srv://b-forster:i2RdzyJ4QZ4xOnMj@dnd-archivist.rlmofac.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

module.exports = client;