var userOperation = require('../database/operation/userOperation');



var userSignUp = function (parameter) {
    return new Promise((resolve, reject) => {
        if (parameter) {
            userOperation.userSignUpData(parameter).then((userData) => {
                resolve(userData);
            })
        }
    })

};


module.exports = {
    userSignUp: userSignUp,
}