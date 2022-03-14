const express = require("express");
var championsController = require("../controllers/champion");
const api = express.Router();

api.get("/champions", championsController.getChampions);
api.get("/champions/:id", championsController.getChampion);
api.post("/champions", championsController.saveChampion)

module.exports = api;
