var express = require('express');
var router = express.Router();
var Contact = require('../database/model/contactModels');
var contactController = require('../controller/contactControllers');


/**
 * This is the API for getting the contacts from database.
 */
router.get('/getContacts', (req, res, next) => {

    contactController.getContacts().then((result) => {
        res.status(200).json({
            count: result.length,
            success: true,
            MSG: 'Contact found successfully',
            contact: result
        });
    });
});

/**
 * This is the API for saving the contact in database
 */
router.post('/addContacts', (req, res, next) => {

    var parameter = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.adress,
        number: req.body.contact,
        isTrue: req.body.isTrue
    }

    if (parameter.firstName && parameter.number) {
        contactController.saveContact(parameter)
            .then((result) => {
                console.log(result);
                if (result) {
                    res.status(201).send({
                        success: true,
                        MSG: 'contact saved successfully',
                        contact: result
                    })
                        .catch((err) => {
                            console.log(err);
                            res.status(500).send({
                                success: false,
                                MSG: 'Error in save',
                                error: err
                            });
                        });
                }
            });
    } else {
        res.status(500).send({
            success: false,
            MSG: 'Error in save',
            error: err
        });
    }
});

/**
 * This is the API for updating the contact in database
 */
router.post('/updateContacts', (req, res, next) => {
    var id = req.body._id;
    var parameter = req.body.parameter;

    contactController.updateContacts(id, parameter)
        .then((result) => {
            if (result) {
                res.status(200).json({
                    success: true,
                    MSG: 'Contact updated successfully',
                    contact: result
                })
                    .catch((err) => {
                        res.status(500).send({
                            success: false,
                            MSG: 'Error in updated',
                            error: err
                        });
                    });
            } else {
                res.status(500).send({
                    success: false,
                    MSG: 'Error in updated',
                    error: err
                });
            }
        });
});

/**
 * This is the API for soft delete the contact from database
 */
router.post('/deleteContacts', (req, res, next) => {

    // var id = req.body._id;
    // var isTrue = req.body.isTrue;
    // console.log('/////////')
    //     console.log(id);
    //     console.log(isTrue);

    // contactController.deleteContacts(id, isTrue).then((result)=>{
    //     console.log(result);
    //     if(result){
    //         res.status(200).send({
    //         success:true,
    //         MSG:'Contact deleted successfully',
    //         contact:result
    //     })
    //     .catch((err)=>{
    //         res.status(500).send({
    //             success:false,
    //             MSG:'Error occur in deletion',
    //             error:err
    //         });
    //     });
    //     }else{
    //         res.status(500).send({
    //             success:false,
    //             MSG:'Error occur in deletion',
    //             error:err
    //         });
    //     }
    // });

    Contact.findByIdAndUpdate(req.body._id, { $set: { isTrue: req.body.isTrue } }).then(function (data) {
        if (data) {
            if (data.isTrue == true) {
                data.isTrue = false;
            }
            res.send({ success: true, MSG: 'contact Deleted', data: data });
        }
    });
});


/**
 * This is the API for getting all the company present in database
 */
router.get('/getAllCompany', (req, res, next) => {
    contactController.getAllCompany()
        .then((result) => {
            if (result) {
                res.status(200).send({
                    success: true,
                    MSG: 'Company List Found',
                    company: result
                })
                    .catch((err) => {
                        res.status(500).send({
                            success: false,
                            MSG: 'Company not found',
                            error: err
                        });
                    });
            } else {
                res.status(500).send({
                    success: false,
                    MSG: 'Company not found',
                    error: err
                });
            }
        });
});





module.exports = router;