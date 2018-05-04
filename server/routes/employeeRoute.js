var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employee = require('../database/model/employeeModel');
var Company = require('../database/model/companyModel');

//Route for getting the all Employee who have isTrue == true
router.get('/getAllEmployee',(req, res, next)=>{
    Employee.find({isTrue:true}).then((employee)=>{
        console.log(employee);
        res.send({success:true,MSG:'employee List Found',employee:employee});
    });
});


//Route for saving the employee in DB
router.post('/saveEmployee',(req, res,next)=>{
    console.log(req.body);

    var parameter = {
        _id:new mongoose.Types.ObjectId(),
        employeeId:req.body.employeeId,
        EmployeeFirstName:req.body.EmployeeFirstName,
        EmployeeLastName:req.body.EmployeeLastName,
        companyName:req.body.companyName,
        employeeAdress:req.body.employeeAdress,
        employeeContact:req.body.employeeContact,
        companyId:req.body.companyId
    }

    var employee = new Employee(parameter);

    employee.save().then((employee)=>{
        res.send({success:true, MSG:'Employee is saved successfully', employee:employee});
    });
});

//Route for updating the Employee 
router.post('/updateEmployee', (req, res, next)=>{
    
    console.log(req.body);
    var parameter = req.body;
    var _id = req.body._id;
    
    Employee.findByIdAndUpdate(_id, {$set:parameter}).then((employee)=>{
        res.send({success:true, MSG:'Employee data updated', employee:employee});
    });
});


//Route for Deleting the Employee
router.post('/deleteEmployee',(req, res, next)=>{

    console.log(req.body);
    var id = req.body._id;
    Employee.findByIdAndUpdate(id,{$set:{isTrue:false}}).then((employee)=>{
        if(employee){
            employee.isTrue = false;
            res.send({success:true, MSG:'Employee Deleted Successfully', employee:employee});
        }
    })
});

router.get('/getAllCompany',(req, res, next)=>{
    Company.find()
    .populate('company')
    .exec()
    .then(function(company){
        console.log(company);
        res.send({success:true, MSG:'All company found', company:company});
    })
});

//Route for employee list according to Selected Company
router.get('/companyId',(req, res, next)=>{
console.log("/////////////");
// console.log(req)
    console.log(req.query);
    var id =req.query.company;
    console.log(id)
    Employee.find({companyId:id})
    // .populate('company')
    // .exec()
    .then(function(company){
        console.log(company);
        res.send({success:true, MSG:'All company found', company:company});
    })
});

router.get('/getPoputateEmployee',(req, res, next)=>{
    Employee.find()
    // .select('companyName companyAdress companyContact companyId')
    .populate("companyId")
    .exec()
    .then(function(employee){
         res.send({success:true, MSG:'All company found', employee:employee});
        console.log(employee);
    })
    // .populate('number')
    // .exec((employee)=>{
    //     console.log(employee);
    //     res.send({success:true,MSG:'employee List Found',employee:employee});
    // });
});



module.exports = router;