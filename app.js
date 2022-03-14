const express = require("express");
const app = express();
const cors = require('cors');

let championsRoute = require("./src/routes/championsRoute");
let summonersRoute = require("./src/routes/summonersRoute");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/leaguestats/", championsRoute, summonersRoute);

app.get("/", (req, res) => {
    res.send("Server up!");
});

module.exports = app;