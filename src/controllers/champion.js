const champions = require("../models/champion");

function getChampions(req, res) {
    champions.find((err, listChampions) => {
        if (err) {
            res.status(500).send({
                message: "Error del servidor!"
            })
        }
        if (listChampions) {
            res.status(200).json({
                Champions: listChampions
            })
        }
    })
}

function saveChampion(req, res) {
    var champion = new champions();
    var params = req.body;
    console.log(params);
    if (params._id && params.key && params.name && params.image.pathIcon && params.image.pathSplash) {
        champion.version = params.version;
        champion._id = params._id;
        champion.key = params.key;
        champion.name = params.name;
        champion.title = params.String;
        champion.blurb = params.String;
        champion.info = { ...params.info };
        champion.image = { ...params.image };
        champion.tags = params.tags;
        champion.partype = params.partype;
        champion.stats = { ...params.stats }
        champion.save((err, championStored) => {
            if (err) {
                res.status(500).send({
                    message: "Error del servidor!"
                })
            }
            if (championStored) {
                res.status(200).send({
                    Champion: championStored
                })
            } else {
                res.status(500).send({
                    message: "No se pudo guardar el campeon!"
                })
            }
        })
    } else {
        res.status(500).send({
            message: "Error del servidor!",
            body: {
                _id: params._id, key: params.key, name: params.name, pathIcon: params.image.pathIcon, pathSplash: params.image.pathSplash
            }
        })
    }
}

function getChampion(req, res) {
    let id = req.params.id;
    console.log(req.params);
    champions.findById(id, (err, listChampions) => {
        if (err) {
            res.status(500).send({
                message: 'Error de servidor..'
            });
        } else {
            if (listChampions) {
                res.status(200).json({
                    Champions: listChampions
                });
            } else {
                res.status(404).send({
                    message: 'El campeon no ha sido encontrado'
                })
            }
        }
    })
}
module.exports = {
    getChampions,
    saveChampion, getChampion
}