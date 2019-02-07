var express = require('express');
var router = express.Router();
var users = require('../controllers/controlChat');
var chatController = require('../controller/chatController');
var auth = require('../authentication/auth');
// router.get('/getAllUser', auth, users.getAllUser);
// router.get('/getUserMsg', auth, controlChat.getUserMsg);