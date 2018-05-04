var viewCompanyControllerApp = angular.module('viewCompanyController', ['companyService'])
    .controller('viewCompanyController', viewCompanyController);

    function viewCompanyController($scope, $state, companyService){


        $scope.formdata = companyService.getFormData();
        
        $scope.goBack = function(){
            $state.go('company')
        }
    }