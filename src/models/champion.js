const mongoose = require("mongoose")

const championScheme = mongoose.Schema({
    version: String,
    _id: String,
    key: Number,
    name: String,
    title: String,
    blurb: String,
    info: [{
        attack: Number,
        defense: Number,
        magic: Number,
        difficulty: Number
    }],
    image: {
        pathIcon: String,
        pathSplash: String
    },
    tags: [String],
    partype: String,
    stats: {
        hp: Number,
        hpperlevel: Number,
        mp: Number,
        mpperlevel: Number,
        movespeed: Number,
        armor: Number,
        armorperlevel: Number,
        spellblock: Number,
        spellblockperlevel: Number,
        attackrange: Number,
        hpregen: Number,
        hpregenperlevel: Number,
        mpregen: Number,
        mpregenperlevel: Number,
        crit: Number,
        critperlevel: Number,
        attackdamage: Number,
        attackdamageperlevel: Number,
        attackspeedperlevel: Number,
        attackspeed: Number
    }

});


module.exports = mongoose.model("champions", championScheme, "champions");
