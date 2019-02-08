/************************************************************
 * 
 * Purpose      :   To route to respective controler.
 * 
 * @description
 * 
 * @file        :   server.js
 * @overview    :   To route to perticular API.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   28-01-2019
 * 
 * **********************************************************/
const express = require('express');
const router = express.Router();
const authenticRoutes = require('./authorization');
const controlRegister = require('../controllers/controlRegister');
const controlLogin = require('../controllers/controlLogin');
router.post('/registration', controlRegister.registration);
router.post('/login', controlLogin.login);
//router.use('/auth', authenticRoutes);
module.exports = router; 