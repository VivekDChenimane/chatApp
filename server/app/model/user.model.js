const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    password: { type: String },
});

var user = mongoose.model('user', userSchema);

function userModel() {

}

userModel.prototype.save = (data, callback) => {
    // console.log(data);
    
    var newData = new user(data);
    newData.save((error, result) => {
        if (error) {
            callback(error);
        } else {
            callback(null, result);
        }
    })
}

module.exports = new userModel();
