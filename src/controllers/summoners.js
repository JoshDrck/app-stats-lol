const summoners = require("../models/summoners");

function getSummoners(req, res) {
    summoners.find((err, listSummoners) => {
        if (err) {
            res.status(500).send({
                message: "Error!"
            })
        }
        if (listSummoners) {
            res.status(200).json({
                Summoners: listSummoners
            })
        }
    })
}

function saveSummoner(req, res) {
    let summoner = new summoners();
    let params = req.body;
    console.log(params)
    if (params._id) {
        summoner._id = params._id;
        summoner.name = params.name;
        summoner.icon = params.icon;
        summoner.lvl = params.lvl;
        summoner.champions = params.champions;
        summoner.leagueTier = params.leagueTier;
        summoner.queueLine = params.queueLine;
        summoner.leaguePoints = params.leaguePoints;
        summoner.wins = params.wins;
        summoner.losses = params.losses;
        summoner.save((err, storedSummoner) => {
            if (err) {
                res.status(500).send({
                    message: "Error del servidor!"
                })
            }

            if (storedSummoner) {
                res.status(200).send({
                    Summoner: storedSummoner
                })
            } else {
                res.status(500).send({
                    message: "No se pudo guardar el summoner"
                })
            }
        })
    } else {
        res.status(500).send({
            message: "La id no puede estar vacia!",
        })
    }
}

function getSummoner(req, res) {
    let id = req.params.id;
    console.log(req.params);
    summoners.findById(id, (err, listSumonner) => {
        if (err) {
            res.status(500).send({
                message: 'Error de servidor..'
            });
        } else {
            if (listSumonner) {
                res.status(200).json({
                    Summoner: listSumonner
                });
            } else {
                res.status(404).send({
                    message: 'El jugador no ha sido encontrado'
                })
            }
        }
    })
}

module.exports = {
    getSummoners,
    saveSummoner,
    getSummoner
}