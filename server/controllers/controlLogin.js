/************************************************************
 * 
 * Purpose      :   To validate and control the login functionality.
 * 
 * @description
 * 
 * @file        :   controlLogin.js
 * @overview    :   Login and generate Token.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   28-01-2019
 * 
 * **********************************************************/
const serviceLogin = require('../services/serviceLogin');
const jwt = require('jsonwebtoken');
exports.login = (req, res) => {
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'password is not valid').isLength({ min: 6 });
    var secret = "adcd";
    var errors = req.validationErrors();
    var response = {};
    if (errors) {
        console.log('validation error');
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        serviceLogin.login(req.body, (err, data) => {
            if (err) {
                console.log('login error');
                return res.status(500).send({
                    message: err
                });
            } else {
                var token = jwt.sign({ id: data._id }, secret, { expiresIn: '2h' });
                return res.status(200).send({
                    message: data,
                     "token": token
                });
            }
        })
    }
}
module.exports.getAllUser = (req, res) => {
    serviceLogin.getAllUser((err, data) => {
        if (err) {
            return res.status(500).send({
                message: err
            });
        }
        else{
            return res.status(200).send({
                message: data
            });
        }
    })
}