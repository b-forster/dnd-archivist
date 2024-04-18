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


app.listen(port, async () => {
    console.log(`Server is running on port: ${port}`);
});