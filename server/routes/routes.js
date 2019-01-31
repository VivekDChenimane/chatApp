const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/registration', userController.registration);

module.exports = router;