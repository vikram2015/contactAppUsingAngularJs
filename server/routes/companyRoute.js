var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Company = require('../database/model/companyModel');
var Employee = require('../database/model/employeeModel');



router.get('/getAllCompany', (req, res, next)=>{
    Company.find({isTrue:true}).then((company)=>{
        res.send({success:true, MSG:'Company List Found', company:company});
    });
});

router.post('/saveCompany', (req, res, next)=>{
    console.log(req.body);
    var parameter = {
        _id:new mongoose.Types.ObjectId(),
        companyId:req.body.companyId,
        companyType:req.body.companyType,
        companyName:req.body.companyName,
        companyAdress:req.body.companyAdress,
        companyContact:req.body.companyContact,
        companyEmployeeNumber:req.body.companyEmployeeNumber
    };
    var company = new Company(parameter);
    company.save().then((company)=>{
        res.send({success:true, MSG:'Company Saved Successfully', company:company});
    });
});

router.post('/updateCompany', (req, res, next)=>{
    console.log(req.body);
    var _id = req.body._id;
    var parameter = req.body;
    Company.findByIdAndUpdate(_id, {$set:parameter}).then((company)=>{
        res.send({success:true,MSG:'Company Updated Successfully', company:company});
    });
});


router.post('/deleteCompanyData', (req, res, next)=>{

    console.log(req.body);
    var _id = req.body._id;
    Company.findByIdAndUpdate(_id,{$set:{isTrue:false}}).then((company)=>{
        company.isTrue = false;
        res.send({success:true, MSG:'Company Deleted Successfully', company:company});
    })
})

router.get('/getCompanyEmploy', (req, res, next)=>{
    var id  = req.query.id;
    Employee.find({companyId:id}).then((company)=>{
        res.send({success:true, MSG:'Company List Found', company:company});
    });
});

module.exports = router;    