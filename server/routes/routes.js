const express = require('express');
const router = express.Router();
const controlRegister = require('../controllers/controlRegister');
const controlLogin = require('../controllers/controlLogin');
router.post('/registration', controlRegister.registration);
router.post('/login', controlLogin.login);
module.exports = router; 