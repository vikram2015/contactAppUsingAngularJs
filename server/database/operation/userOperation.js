var User = require('../model/userModel');
var Promise = require('promise');


var userSignUpData = function (parameter) {
    return new Promise((resolve, reject) => {
        var user = new User(parameter);
        user.save().then((userResult) => {
            if (userResult) {
                resolve(userResult);
            }
        });
    });
};


module.exports = {
    userSignUpData: userSignUpData,
}