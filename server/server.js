const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 4000;
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(require("./routes/character"));

// get driver connection
const dbo = require("./db/conn");

app.listen(port, async () => {
    // perform a database connection when server starts
    await dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`);
});