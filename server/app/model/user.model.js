const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
/**
 * @description Create an instance of the schema.
 */
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
     user.find({'email':data.email}, (err,result)=>{
        if(err){
            return callback(err);
        } else if (data.length>0){
            bcrypt.compare(data.password,result[0].password,function (err,res){
                if(err){
                    return callback(err);
                }
                else if (res){
                    console.log(result);
                    return callback(null,result);
                }
                else{
                    return callback("Incorrect password").status(500);
                }
            });
            }else{
                return callback("Invalid User");
            }
        })
     }

module.exports = new userModel();
