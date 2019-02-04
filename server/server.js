const express = require('express');
const app = express()
const port = 3000
const database = require('./config/database.config');
const mongoose = require('mongoose');
const router = require('./routes/routes');
const bodyParser = require('body-parser')   
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/', router);
app.use(express.static('client'));
function startMongo() {
    mongoose.set('useCreateIndex', true);
    mongoose.connect(database.databaseName, { useNewUrlParser: true });
    mongoose.connection.on("connected", () => {
        console.log("connected to mongodb on %s", database.databaseName);
    })
    mongoose.connection.on("error", (err) => {
        if (err) {
            console.log("not connected to mongodb due to %s", err);
            process.exit();
        }
    })
}
app.listen(port, () => {
    startMongo()
    console.log(`Example app listening on port ${port}!`)
})