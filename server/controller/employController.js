var employOperation = require('../database/operation/employOperation');
var Promise = require('promise');



/**
 * This is the function for saving the employee in the database
 * 
 * @param {*} parameter is the data which we have to save in the database
 */
var saveEmploee = function (parameter) {
    return new Promise((resolve, reject) => {
        if (parameter) {
            employOperation.saveNewEmploy(parameter).then((employ) => {
                if (employ) {
                    resolve(parameter);
                }
            })
        }
    })
};

/**
 * This is the function for getting all the employ
 */
var getEmploy = function () {
    return new Promise((resolve, reject) => {
        employOperation.getAllEmploy().then((employ) => {
            if (employ) {
                resolve(employ);
            } else {
                reject();
            }
        });
    });
};

/**
 * This is the function for validating and then updating the records
 * 
 * @param {*} id is the _id according to which we can search in DB
 * @param {*} parameter is the record which we have to update
 */
var updateEmploy = function (id, parameter) {
    return new Promise((resolve, reject) => {
        if (parameter) {
            employOperation.updateTheEmploy(parameter).then((employ) => {
                if (employ) {
                    resolve(employ);
                } else {
                    reject();
                }
            });
        } else {
            resolve(false);
        }
    });
};

/**
 * 
 * @param {*} parameter is the record according to which we have to softly delete the employ from database
 */
var deleteEmploy = function (parameter) {
    return new Promise((resolve, reject) => {
        if (parameter) {
            employOperation.deleteTheEmploy(parameter).then((employ) => {
                if (employ) {
                    resolve(employ);
                } else {
                    reject();
                }
            });
        } else {
            resolve(false);
        }
    });
};

/**
 * This is the function for getting the total company whose isTrue == true 
 */
var getCompany = function () {
    return new Promise((resolve, reject) => {
        employOperation.getALLCompany().then((company) => {
            if (company) {
                resolve(company);
            } else {
                reject();
            }
        });
    });
};

/**
 * This is the function for getting the employee list according to company selected
 */
var getCompanyEmployee = function (id) {
    return new Promise((resolve, reject) => {
        employOperation.getSelectedCompanyEmployee(id).then((employ) => {
            if (employ) {
                resolve(employ)
            } else {
                reject();
            }
        });
    });
};


module.exports = {
    saveEmploee: saveEmploee,
    getEmploy: getEmploy,
    updateEmploy: updateEmploy,
    deleteEmploy: deleteEmploy,
    getCompany: getCompany,
    getCompanyEmployee: getCompanyEmployee
}