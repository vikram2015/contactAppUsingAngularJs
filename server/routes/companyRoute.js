var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var Company = require('../database/model/companyModel');
// var Employee = /require('../database/model/employeeModel');

var CompanyController = require('../controller/companyController');


/**
 * Route for getting the company from database
 */
router.get('/getAllCompany', (req, res, next)=>{
    CompanyController.getCompany().then((company)=>{
        if(company){
            res.status(200).send({
                success:true,
                MSG:'Company List Found',
                company:company
            })
            .catch((err)=>{
                res.status(500).send({
                    success:false,
                    MSG:'Company List Not Found',
                    error:err
                });
            });
        }else{
            res.status(500).send({
                success:false,
                MSG:'Contact list not found',
                error:err
            });
        }
    });
});


/**
 * Route for saving the company in database
 */
router.post('/saveCompany', (req, res, next)=>{
    var parameter = {
        _id:new mongoose.Types.ObjectId(),
        companyId:req.body.companyId,
        companyType:req.body.companyType,
        companyName:req.body.companyName,
        companyAdress:req.body.companyAdress,
        companyContact:req.body.companyContact,
        companyEmployeeNumber:req.body.companyEmployeeNumber
    };

    CompanyController.saveCompany(parameter).then((company)=>{
        if(company){
            res.status(200).send({
                success:true,
                MSG:'Company saved successfully',
                company:company
            })
            .catch((err)=>{
                res.status(500).send({
                    success:false,
                    MSG:'Company not saved',
                    error:err
                });
            });
        }else{
            res.status(500).send({
                success:false,
                MSG:'Company not saved',
                error:err
            });
        }
    });
});

/**
 * Route for updating the company in database according to _id
 */
router.post('/updateCompany', (req, res, next)=>{
    var _id = req.body._id;
    var parameter = req.body;
    console.log(req.body);
    console.log(id);
    console.log(parameter);
    CompanyController.updateCompany(id, parameter).then((company)=>{
        if(company){
            res.status(200).send({
                success:true,
                MSG:'Company updated successfully',
                company:company
            })
            .catch((err)=>{
                res.status(500).send({
                    success:false,
                    MSG:'Company not updated',
                    error:err
                });
            });
        }else{
            res.status(500).send({
                success:false,
                MSG:'company not updated',
                error:err
            });
        }
    });
});


/**
 * Route for soft deleting the company from database
 */
router.post('/deleteCompanyData', (req, res, next)=>{

    var _id = req.body._id;
    CompanyController.deleteCompany(id).then((company)=>{
        if(company){
            res.status(200).send({
                success:true,
                MSG:'Compnay deleted',
                company:company
            })
            .catch((err)=>{
                res.status(500).send({
                    success:false,
                    MSG:'Company not deleted',
                    error:err
                });
            });
        }else{
            res.status(500).send({
                success:false,
                MSG:'company not deleted',
                error:err
            });
        }
    });
})

router.get('/getCompanyEmploy', (req, res, next)=>{
    var id  = req.query.id;
    Employee.find({companyId:id}).then((company)=>{
        res.send({success:true, MSG:'Company List Found', company:company});
    });
});

module.exports = router;    