angular.module('routerNewApp',[
    'routerApp',

    //Route for Home page
    'homeController',

    //Route for Contact
    'contactController',
    'addContactController',
    'updateContactController',
    'viewContactController',
    'contactService',

    //Route for Employee
    'employeeController',
    'addEmployeeController',
    'updateEmployeeController',
    'viewEmployeeController',
    'employeeService',

    //Route for Company
    'companyController',
    'addCompanyController',
    'updateCompanyController',
    'viewCompanyController',
    'companyService',

    //Route for User
    'userRegistrationController',
    'userService'
]);