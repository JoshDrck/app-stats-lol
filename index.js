const app = require("./app")
const mongoose = require("mongoose");
const PORT = 3000;
const connectionString = "mongodb://localhost:27017/bdLeagueOfLegends";

mongoose.Promise = global.Promise;


mongoose.connect(connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {

        app.listen(PORT, () => {
            console.log(`App escuchando en el puerto en http://localhost:${PORT}`);
        });
    }).catch(err => console.log(err));
