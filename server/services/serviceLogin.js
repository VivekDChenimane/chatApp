const userModel = require('../app/model/user.model')
exports.login = (data, callback) => {
    console.log("in Login");
    userModel.login(data, (error, result) => {
        if (error) {
            callback(error);
        } else {
            callback(null, result);
        }
    });
}