var config = require('../../config/config');
var userController = require('../controller/userController');
var secretkey = config.secretkey;

var express = require('express');
var router = express.Router();

router.post('/signUp', (req, res, next) => {
    var user = {
        username: req.body.userName,
        password: req.body.Password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userAge: req.body.age,
        userGender: req.body.gender,
        alternateEmail: req.body.alternateEmail
    }
    userController.userSignUp(user).then((userdata) => {
        res.status(200).send({
            success: true,
            MSG: 'Usser Saved Successfully',
            userdata: userdata
        })
            .catch((err) => {
                res.status(500).send({
                    success: false,
                    MSG: 'Usser not Saved',
                    error: err
                })

            })
    });
});


/**
 * Route for the login
 */
router.get('/users', (req, res, next)=>{
    
})

module.exports = router;