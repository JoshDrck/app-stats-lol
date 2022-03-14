const mongoose = require("mongoose")

let summonerSchema = mongoose.Schema(
    {
        _id: String,
        name: String,
        icon: String,
        lvl: String,
        champions: Array,
        leagueTier: String,
        queueLine: String,
        leaguePoints: Number,
        wins: Number,
        losses: Number
    });

module.exports = mongoose.model("summoners", summonerSchema, "summoners");
