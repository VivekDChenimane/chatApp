/************************************************************
 * 
 * Purpose      :   Application starts from here.
 * 
 * @description
 * 
 * @file        :   server.js
 * @overview    :   import all the required packages here.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   28-01-2019
 * 
 * **********************************************************/
// Use Express framework, which allows us to support HTTP protocol and Socket.IO
const express = require('express');
const app = express();
var server = require('http').Server(app);
const port = 3000
const database = require('./config/database.config');
const mongoose = require('mongoose');
const router = require('./routes/routes');
const bodyParser = require('body-parser');
var io = require('socket.io')(server);
var expressValidator = require('express-validator');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });
app.use('/', router);
app.use(express.static('client'));
//Listen 'connection' event, which is automatically send by the web client (no need to define it)
io.on('connection', (socket) => {
    console.log("New user connected");
    // Listen 'create message' event, which is sent by the web client while sending request
    socket.on('createMessage', (message) => {
        console.log("message: in server is ", message);
                io.emit('newMessageSingle', message);
        socket.on('disconnect', () => {
            console.log("User was disconnected");
        });
    });
});
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
server.listen(port, () => {
    startMongo()
    console.log(`Example app listening on port ${port}!`)
})