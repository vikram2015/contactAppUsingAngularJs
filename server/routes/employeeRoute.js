var express = require('express');
var router = express.Router();
var EmployController = require('../controller/employController');

//Route for getting the all Employee who have isTrue == true
router.get('/getAllEmployee', (req, res, next) => {
    EmployController.getEmploy().then((employee) => {
        if (employee) {
            res.status(200).send({
                success: true,
                MSG: 'Employee Found Successfully',
                employee: employee
            })
                .catch((err) => {
                    res.status(500).send({
                        success: false,
                        MSG: 'Error in finding Employee List',
                        error: err
                    });
                });
        } else {
            res.status(500).send({
                success: false,
                MSG: 'Error in finding Employee List',
                error: err
            });
        }
    });
});


//Route for saving the employee in DB
router.post('/saveEmployee', (req, res, next) => {

    var parameter = {
        _id: new mongoose.Types.ObjectId(),
        employeeId: req.body.employeeId,
        EmployeeFirstName: req.body.EmployeeFirstName,
        EmployeeLastName: req.body.EmployeeLastName,
        companyName: req.body.companyName,
        employeeAdress: req.body.employeeAdress,
        employeeContact: req.body.employeeContact,
        companyId: req.body.companyId
    }

    EmployController.saveEmploee(parameter).then((employee) => {
        if (employee) {
            res.status(200).send({
                success: true,
                MSG: 'Employee Saved Successfully',
                employee: employee
            })
                .catch((err) => {
                    res.status(500).send({
                        success: false,
                        MSG: 'Error in saving employee',
                        employee: employee
                    });
                });
        } else {
            res.send(500).send({
                success: false,
                MSG: 'Error in saving Employee',
                employee: employee
            });
        }
    });
});

//Route for updating the Employee 
router.post('/updateEmployee', (req, res, next) => {

    var parameter = req.body;
    var _id = req.body._id;

    EmployController.updateEmploy(id, parameter).then((employee) => {
        if (employee) {
            res.status(200).send({
                success: true,
                MSG: 'Employee Updated Successfully',
                employee: employee
            })
                .catch((err) => {
                    res.status(500).send({
                        success: false,
                        MSG: 'Error in update employee',
                        error: err
                    });
                });
        } else {
            res.status(500).send({
                success: false,
                MSG: 'Error in update employee',
                error: err
            });
        }
    });
});


//Route for Deleting the Employee
router.post('/deleteEmployee', (req, res, next) => {

    var id = req.body._id;

    EmployController.deleteEmploy(id).then((employee) => {
        if (employee) {
            res.status(200).send({
                success: true,
                MSG: 'Employee Deleted Successfully',
                employee: employee
            })
                .catch((err) => {
                    res.status(500).send({

                        success: false,
                        MSG: 'Employee do not deleted',
                        error: err
                    });
                });
        } else {
            res.status(500).send({
                success: false,
                MSG: 'Error in deleting employee',
                error: err
            });
        }
    });
});

/**
 * Route for getting all the company to show in dropdown
 */
router.get('/getAllCompany', (req, res, next) => {
    EmployController.getCompany().then((company) => {
        if (company) {
            res.status(200).send({
                success: true,
                MSG: 'Company Found Successfully',
                company: company
            }).catch((err) => {
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

/**
 * Route for getting the Employee list according to the company selected
 */
router.get('/companyId', (req, res, next) => {
    var id = req.query.company;
    EmployController.getCompanyEmployee(id).then((company) => {
        if (company) {
            res.status(200).send({
                success: true,
                MSG: 'Company List found',
                company: company
            })
                .catch((err) => {
                    res.status(500).send({
                        success: false,
                        MSG: 'Company list not found',
                        error: err
                    });
                });
        } else {
            res.status(500).send({
                success: false,
                MSG: 'Company list not found',
                error: err
            });
        }
    });
});



module.exports = router;