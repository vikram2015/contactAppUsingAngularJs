var Employee = require('../model/employeeModel');
var Company = require('../model/companyModel');
var Promise = require('promise');


var getAllEmploy = function () {
    return new Promise((resolve, reject) => {
        Employee.find({ isTrue: true })
            .exec()
            .then((Employee) => {
                if (Employee) {
                    resolve(Employee);
                } else {
                    reject();
                }
            });
    });
};

var saveNewEmploy = function (parameter) {
    return new Promise((resolve, reject) => {
        var employee = new Employee(parameter);

        employee.save()
            .then((employee) => {
                if (employee) {
                    resolve(true);
                } else {
                    reject();
                }
            });
    });
};


var updateTheEmploy = function (id, parameter) {
    return new Promise((resolve, reject) => {
        if (id && parameter) {
            Employee.findByIdAndUpdate(id, { $set: parameter })
                .exec()
                .then((employee) => {
                    if (employee) {
                        resolve(employee);
                    } else {
                        reject();
                    }
                });
        } else {
            resolve(false);
        }
    })
};

var deleteTheEmploy = function (id, parameter) {
    return new Promise((resolve, reject) => {
        if (id && parameter) {
            Employee.findByIdAndUpdate(id, { $set: { isTrue: false } })
                .exec()
                .then((employee) => {
                    if (employee) {
                        resolve(employee)
                    } else {
                        reject();
                    }
                })
        } else {
            resolve(false);
        }
    })
}


var getALLCompany = function () {
    return new Promise((resolve, reject) => {
        Company.find({ isTrue: true })
            .exec()
            .then((company) => {
                if (company) {
                    resolve(company)
                } else {
                    reject();
                }
            });
    });
}

var getSelectedCompanyEmployee = function (id) {
    return new Promise((resolve, reject) => {
        Employee.find({ companyId: id })
            .exec()
            .then((company) => {
                if (company) {
                    resolve(company);
                } else {
                    reject();
                }
            });
    });
};

module.exports = {
    getAllEmploy: getAllEmploy,
    saveNewEmploy: saveNewEmploy,
    updateTheEmploy: updateTheEmploy,
    deleteTheEmploy: deleteTheEmploy,
    getALLCompany: getALLCompany,
    getSelectedCompanyEmployee: getSelectedCompanyEmployee
}
