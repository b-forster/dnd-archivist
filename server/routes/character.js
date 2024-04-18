const express = require("express");
const characterRoutes = express.Router();

// This will help us connect to the database
const dbClient = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// @route   GET characters/test
// @desc    Tests characters route
// @access  Public
characterRoutes.get('/test', (req, res) => res.send('character route testing!'));


// This section will help you get a list of all the characters.
// characterRoutes.route("/character").get(function (req, res) {
//     let db_connect = dbo.getDb("dnd-archivist");
//     db_connect
//         .collection("Characters")
//         .find({})
//         .toArray(function (err, result) {
//             if (err) throw err;
//             res.json(result);
//         });
// });

// // This section will help you get a single character by id
// characterRoutes.route("/character/:id").get(function (req, res) {
//     let db_connect = dbo.getDb();
//     let myquery = { _id: ObjectId(req.params.id) };
//     db_connect
//         .collection("Characters")
//         .findOne(myquery, function (err, result) {
//             if (err) throw err;
//             res.json(result);
//         });
// });

// This section will help you create a new character.
characterRoutes.route("/character/add").post(async function (req, response) {

    let db_connect = dbClient.db("db");
    let myobj = req.body;
    await db_connect.collection("Characters").insertOne(myobj, async function (err, res) {
        if (err) throw err;
        response.json(res);

    });
    await dbClient.close();
});

// // This section will help you update a character by id.
// characterRoutes.route("/update/:id").post(function (req, response) {
//     let db_connect = dbo.getDb();
//     let myquery = { _id: ObjectId(req.params.id) };
//     let newvalues = {
//         $set: {
//             name: req.body.name,
//             position: req.body.position,
//             level: req.body.level,
//         },
//     };
//     db_connect
//         .collection("characters")
//         .updateOne(myquery, newvalues, function (err, res) {
//             if (err) throw err;
//             console.log("1 document updated");
//             response.json(res);
//         });
// });

// // This section will help you delete a character
// characterRoutes.route("/:id").delete((req, response) => {
//     let db_connect = dbo.getDb();
//     let myquery = { _id: ObjectId(req.params.id) };
//     db_connect.collection("characters").deleteOne(myquery, function (err, obj) {
//         if (err) throw err;
//         console.log("1 document deleted");
//         response.json(obj);
//     });
// });

module.exports = characterRoutes;