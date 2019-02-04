const serviceRegister = require('../services/serviceRegister');

exports.registration = (req, res) => {
    var responseResult = {}
    console.log(req.body);
    
    serviceRegister.registration(req.body, (error, result) => {
        console.log("in controller");
        if(error) {
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
