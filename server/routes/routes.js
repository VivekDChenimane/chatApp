const express = require('express');
const router = express.Router();
// const authenticRoutes = require('./authorization');
const controlRegister = require('../controllers/controlRegister');
const controlLogin = require('../controllers/controlLogin');
router.post('/registration', controlRegister.registration);
router.post('/login', controlLogin.login);
// router.use('/auth', authenticRoutes);
module.exports = router; 