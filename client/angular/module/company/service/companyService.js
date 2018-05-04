var companyServiceApp = angular.module('companyService', []);
companyServiceApp.factory('companyService', function ($http, $q) {
    var companyServiceData = {};
    var formdata = {};

    companyServiceData.getAllCompany = function () {
        return $http.get('/company/getAllCompany')
            .then(function (companyRecord) {
                return companyRecord.data;
            });
    };

    companyServiceData.saveCompany= function(parameter){
        return $http.post('/company/saveCompany', parameter)
            .then(function(company){
                console.log(company);
                return company.data;
            });
    };

    companyServiceData.updateCompanyToDB = function(parameter){
        return $http.post('/company/updateCompany', parameter)
            .then(function(company){
                console.log(company);
                return company.data;
            });
    };

    companyServiceData.deleteCompany = function(parameter){
        console.log('111111111')
        return $http.post('/company/deleteCompanyData', parameter)
            .then(function(company){
                console.log(company);
                return company.data;
            })
    }

    companyServiceData.setFormData = function(parameter){
        formdata = parameter;
    }

    companyServiceData.getFormData = function(){
        return formdata;
    }

    return companyServiceData;
})