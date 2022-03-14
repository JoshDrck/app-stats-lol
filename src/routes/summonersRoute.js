const express = require("express");
var summonersController = require("../controllers/summoners");
const api = express.Router();

api.get("/summoners", summonersController.getSummoners);
api.get("/summoners/:id", summonersController.getSummoner);
api.post("/summoners", summonersController.saveSummoner);

module.exports = api;