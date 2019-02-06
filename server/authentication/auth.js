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