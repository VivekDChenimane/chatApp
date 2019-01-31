const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    first_name: { type: String ,required:[true,"First name is required"]},
    last_name: { type: String ,required:[true,"Last name is required"]},
    email: { type: String ,required:[true,"email name is required"]},
    password: { type: String ,required:[true,"password name is required"]},
});

var user = mongoose.model('user', userSchema);

function userModel() {

}

userModel.prototype.save = (data, callback) => {
    console.log(data);
    
    var newData = new user(data);
    newData.save((error, result) => {
        if (error) {
            callback(error);
        } else {
            console.log("in data ");
            callback(null, result);
        }
    })
}

module.exports = new userModel();
