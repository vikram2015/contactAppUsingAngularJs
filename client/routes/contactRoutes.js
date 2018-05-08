var routerApp = angular.module('routerApp',['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider){


    $urlRouterProvider.otherwise('/');


    $stateProvider


        .state('/',{
                url: '/',
                templateUrl: 'views/home/home.html',
                controller: 'homeController'
            })

            /*
        
        This is the route for the Contacts
        
        */
        .state('contac',{
            url: '/contact',
            templateUrl: 'views/contact/contact.html',
            controller: 'contactController'
        })
        .state('addContact',{
            url: '/addContact',
            templateUrl: 'views/contact/addContact.html',
            controller: 'addContactController'
        })
        .state('updateContact',{
            url: '/updateContact',
            templateUrl: 'views/contact/updateContact.html',
            controller: 'updateContactController'
        })
        .state('viewContact',{
            url: '/viewContact',
            templateUrl: 'views/contact/viewContact.html',
            controller: 'viewContactController'
        })

        /*
        
        This is the route for the Employee
        
        */
        .state('employee',{
            url: '/employee',
            templateUrl: 'views/employee/employee.html',
            controller: 'employeeController'
        })
        .state('addEmployee',{
            url: '/addEmployee',
            templateUrl: 'views/employee/addEmployee.html',
            controller: 'addEmployeeController'
        })
        .state('updateEmployee',{
            url: '/updateEmployee',
            templateUrl: 'views/employee/updateEmployee.html',
            controller: 'updateEmployeeController'
        })
        .state('viewEmployee',{
            url: '/viewEmployee',
            templateUrl: 'views/employee/viewEmployee.html',
            controller: 'viewEmployeeController'
        })

        /*
        
        This is the route for the Company
        
        */
        .state('company',{
            url: '/company',
            templateUrl: 'views/company/company.html',
            controller: 'companyController'
        })
        .state('addNewCompany',{
            url: '/addNewCompany',
            templateUrl: 'views/company/addCompany.html',
            controller: 'addCompanyController'
        })
        .state('updateCompany',{
            url: '/updateCompany',
            templateUrl: 'views/company/updateCompany.html',
            controller: 'updateCompanyController'
        })
        .state('viewCompany',{
            url: '/viewCompany',
            templateUrl: 'views/company/viewCompany.html',
            controller: 'viewCompanyController'
        })

        /**
         * This is the route for user
         */
        .state('userRegestration',{
            url: '/userRegestration',
            templateUrl: 'views/user/userRegistration.html',
            controller: 'userRegistrationController'
        })

        



})