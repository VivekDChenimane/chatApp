const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
/**
 * @description Create an instance of the schema.
 */
var Schema = mongoose.Schema;
var userSchema = new Schema({
    firstname: { type: String, required: [true, "First name is required"] },
    lastname: { type: String, required: [true, "Last name is required"] },
    email: { type: String, required: [true, "email name is required"] },
    password: { type: String, required: [true, "password name is required"] },
}, { timestamp: true });

var user = mongoose.model('user', userSchema);

function userModel() {

}
function hash(data) {
    var salt = bcrypt.genSaltSync(10);
    var hashpass = bcrypt.hashSync(data, salt);
    console.log(hashpass);
    return hashpass;
}
userModel.prototype.save = (data, callback) => {
    console.log(data);

    var newData = new user({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: hash(data.password)


    });
    newData.save((error, result) => {
        console.log("save the");
        if (error) {
            callback(error);
        } else {
            console.log("in data ");
            callback(null, result);
        }
    })
}
userModel.prototype.login = (data, callback) => {
    user.find({ 'email': data.email }, (err, result) => {
        if (err) {
            console.log('error in email find 49');
            return callback(err);
        } else if (result.length > 0) {
            console.log('data in 52', data);
            console.log('database pass', result[0]);
            bcrypt.compare(data.password, result[0].password, function (err, res) {
                if (err) {
                    return callback(err);
                }
                else if (res) {
                    console.log(result);
                    return callback(null, result[0]);
                }
                else {
                    return callback("Incorrect password");
                }
            });
        } else {
            return callback("Invalid User");
        }
    })
}

userModel.prototype.getAllUser = (callback)=>{
    user.find({},(err,data)=>{
        if(err){
            callback(err);
        } else{
            callback(null,data);
        }
    })
}

module.exports = new userModel();
