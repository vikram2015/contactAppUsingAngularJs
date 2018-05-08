var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:false
    },
    userAge:{
        type:Number,
        required:false
    },
    userGender:{
        type:String,
        required:false
    },
    alternateEmail:{
        type:String,
        required:false
    }
});


 UserSchema.pre('save', function(next){
     var user = this;
     if(!user.isModified('password')) return next();

     bcrypt.hash(user.password, null, null, function(err, hash){
         if(err) next(err);
         user.password = hash;
         next();
     });
 });

 UserSchema.methods.comparePassword = function(password){
     var user = this;
     return bcrypt.compareSync(password, user.password);
 }


var User = module.exports = mongoose.model('User', UserSchema);