var companyControllerApp = angular.module('companyController', ['companyService'])
    .controller('companyController', companyController);

function companyController($scope, $http, $log, $state, $stateParams, $rootScope, companyService) {

    $scope.companyList = [];

    $scope.addCompany = function () {
        $state.go('addNewCompany');
    }

    $scope.updateCompany = function(parameter){
        companyService.setFormData(parameter);
        $state.go('updateCompany');
    }

    $scope.viewCompany = function(parameter){
        companyService.setFormData(parameter);
        $state.go('viewCompany');
    }

    $scope.deleteCompany = function(parameter, index){
        companyService.deleteCompany(parameter).then(function(company){
            if(company.success && company.company.isTrue == false){
                $scope.companyList.splice(index, 1);
            }
            console.log(company);
        })
    }

    $scope.$on('$stateChangeSuccess', function (events, args) {
        companyService.getAllCompany().then(function (companyDetails) {
            if (companyDetails.success) {
                $scope.companyList = companyDetails.company;
            }
        })
    })

}