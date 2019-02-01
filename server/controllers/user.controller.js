const userServices = require('../services/user.services');

exports.registration = (req, res) => {
    var responseResult = {}
    console.log(req.body);
    
    userServices.registration(req.body, (error, result) => {
        console.log("in controller");
        if(error) {
            responseResult.success = false;
            responseResult.error = error;
            res.status(500).send(responseResult);
        } else {
            responseResult.success = true;
            responseResult.result = result;
            res.status(201).send(responseResult);
        }
    })
}
