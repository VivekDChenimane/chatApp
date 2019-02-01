const express = require('express');
const app = express()
const port = 3000
const database = require('./config/database.config');
const mongoose = require('mongoose');
const router = require('./routes/routes');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/', router);

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