var homeControllerApp = angular.module('homeController', ['homeService'])
    .controller('homeController', homeController);

function homeController($scope, $http, $state, homeService) {

    $scope.companyNumber;
    $scope.employeeNumber;
    $scope.contactNumber;
    



    $scope.$on('$stateChangeSuccess', function (events, args) {
        
        homeService.getTotalCompany().then((company)=>{
            console.log(company);
            $scope.companyNumber = company.company.length;
        });

        homeService.getTotalEmployee().then((employ)=>{
            console.log(employ);
            $scope.employeeNumber = employ.employee.length;
        });

        homeService.getTotalContacts().then((contact)=>{
            console.log(contact);
            $scope.contactNumber = contact.contact.length;
        })
    });



};