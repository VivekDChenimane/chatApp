/************************************************************
 * 
 * Purpose      :   To route to respective controler.
 * 
 * @description
 * 
 * @file        :   authorization.js
 * @overview    :   To authorize the token and then route to perticular API.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   28-01-2019
 * 
 * **********************************************************/
var express = require('express');
var router = express.Router();
var users = require('../controllers/controlChat');
var auth = require('../authentication/auth');
//router.get('/getAllUser', auth, users.getAllUser);