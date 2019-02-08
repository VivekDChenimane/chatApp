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
const serviceRegister = require('../services/serviceRegister');
exports.registration = (req, res) => {
    req.checkBody('firstname', 'First name is invalid').isLength({ min: 3 });
    req.checkBody('email', 'Email is invalid').isEmail();
    req.checkBody('password', 'password is invalid').isLength({ min: 6 });
    var errors = req.validationErrors();
    var responseResult = {}
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        serviceRegister.registration(req.body, (error, result) => {
            if (error) {
                responseResult.success = false;
                responseResult.error = error;
                res.status(500).send(error);
            } else {
                responseResult.success = true;
                responseResult.result = result;
                res.status(201).send(result);
            }
        })
    }
}
