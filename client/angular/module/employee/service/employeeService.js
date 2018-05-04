var myModule = angular.module('employeeService', []);
myModule.factory('employeeService', function ($http, $q) {
    var employeeData = {};
    var formdata = {}

    employeeData.getEmployeeList = function () {
        return $http.get('/employee/getAllEmployee')
            .then(function (employee) {
                if (employee.data.success) {
                    return (employee.data);
                }
            });
    };

    employeeData.addEmployee = function (employeeList) {
        return $http.post('/employee/saveEmployee', employeeList)
            .then(function (data) {
                return (data.data);
            });
    };

    employeeData.updateEmployeeData = function (parameter) {
        return $http.post('/employee/updateEmployee', parameter)
            .then(function (data) {
                return (data.data);
            });
    };

    employeeData.deleteContactFromDB = function (parameter) {
        return $http.post('/employee/deleteEmployee', parameter)
            .then(function (data) {
                return (data.data);
            });
    };

    employeeData.getCompanyList = function () {
        return $http.get('/employee/getAllCompany')
            .then(function (company) {
                console.log(company);
                if (company.data.success) {
                    return (company.data);
                }
            });
    };

     employeeData.getEmployForCompany = function (company) {
         console.log(company)
        return $http.get('/employee/companyId', {params:{company}} )
            .then(function (company) {
                console.log(company);
                if (company.data.success) {
                    return (company.data);
                }
            });
    };


    employeeData.setFormData = function (employee) {
        formdata = employee;
    }

    employeeData.getFormData = function () {
        return formdata;
    }

    return employeeData;


});