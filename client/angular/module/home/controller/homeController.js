var homeControllerApp = angular.module('homeController', ['homeService'])
    .controller('homeController', homeController);

function homeController($scope, $http, $state, homeService) {

    $scope.companyNumber;
    $scope.employeeNumber;
    $scope.contactNumber;




    $scope.$on('$stateChangeSuccess', function (events, args) {

        homeService.getTotalCompany().then((company) => {
            if (company.company.length > 0) {
                $scope.companyNumber = company.company.length;
            } else {
                $scope.companyNumber = 0;
            }
        });

        homeService.getTotalEmployee().then((employ) => {
            if (employ.employee.length > 0) {
                $scope.employeeNumber = employ.employee.length;
            } else {
                $scope.employeeNumber = 0;
            }
        });

        homeService.getTotalContacts().then((contact) => {
            if (contact.contact.length > 0) {
                $scope.contactNumber = contact.contact.length;
            } else {
                $scope.contactNumber = 0;
            }
        })
    });



};