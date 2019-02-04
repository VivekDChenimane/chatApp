
const userModel = require('../app/model/user.model')

exports.registration = (data, callback) => {
    console.log("in Service");
    userModel.save(data, (error, result) => {
        if (error) {
            callback(error);
        } else {
            callback(null, result);
        }
    })
}