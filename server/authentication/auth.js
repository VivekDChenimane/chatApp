/************************************************************
 * 
 * Purpose      :   To authentic the JWT token.
 * 
 * @description
 * 
 * @file        :   auth.js
 * @overview    :   To authenticate the jwt token sent by user during request.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   28-01-2019
 * 
 * **********************************************************/
var jwt = require('jsonwebtoken');
var secret = "adcd";
var auth = function (req, res, next) {
    var token = req.headers["token"];
    console.log(token ,"token is in authentication");
    var response = {
        'message': "Unauthorised user "
    };
       jwt.verify(token, secret, function (err, decodedData) {
        if (err) {
            console.log(err)
            return res.status(401).send(response);
        }
        else {
            console.log(decodedData);
            next();
        }
    });
}
module.exports = auth;