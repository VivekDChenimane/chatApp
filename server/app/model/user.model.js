const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstname: { type: String ,required:[true,"First name is required"]},
    lastname: { type: String ,required:[true,"Last name is required"]},
    email: { type: String ,required:[true,"email name is required"]},
    password: { type: String ,required:[true,"password name is required"]},
},{timestamp:true});

var user = mongoose.model('user', userSchema);

function userModel() {

}

userModel.prototype.save = (data, callback) => {
    console.log(data);
    
    var newData = new user(data);
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
userModel.prototype.login = (data , callback) => {
    // user.find({"email":data.email}, (err,result)=>{

    // }
}

module.exports = new userModel();
