var myModule = angular.module('homeService', []);
myModule.factory('homeService', function ($http, $q) {
    var homeData = {};
    var formdata = {}

    homeData.getTotalCompany = function(){
        return $http.get('/company/getAllCompany').then((company)=>{
            // console.log(company);
            if(company.data.success){
            return(company.data)
            }
        })
    };

    homeData.getTotalEmployee = function(){
        return $http.get('/employee/getAllEmployee').then((employee)=>{
            // console.log(employee);
            if(employee.data.success){
                return (employee.data);
            }
        })
    };

    homeData.getTotalContacts = function(){
        return $http.get('/contact/getContacts').then((contact)=>{
            // console.log(contact);
            if(contact.data.success){
                return(contact.data);
            }
        })
    }

   

    homeData.setFormData = function (employee) {
        formdata = employee;
    }

    homeData.getFormData = function () {
        return formdata;
    }

    return homeData;


});