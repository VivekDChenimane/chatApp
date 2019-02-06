const serviceLogin = require('../services/serviceLogin');
exports.login = (req, res) => {
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'password is not valid').isLength({ min: 6 });
    var secret = "adcd";
    var errors = req.validationErrors();
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        serviceLogin.login(req.body, (err, data) => {
            if (err) {
                return res.status(500).send({
                    message: err
                });
            } else {
                var token = jwt.sign({ id: data[0]._id }, secret, { expiresIn: '2h' });
                return res.status(200).send({
                    message: data,
                    "token": token
                });
            }
        })
    }

}