var addcontactControllerApp = angular.module('addCompanyController', ['companyService'])
    .controller('addCompanyController', addCompanyController);

function addCompanyController($scope, $http, companyService, $state) {

   $scope.addNewCompany = function(){
       $scope.parameter = {
           companyId:$scope.formdata.companyId,
           companyType:$scope.formdata.companyType,
           companyName:$scope.formdata.companyName,
           companyAdress:$scope.formdata.companyAdress,
           companyContact:$scope.formdata.companyContact,
           companyEmployeeNumber:$scope.formdata.companyEmployeeNumber
       };
       companyService.saveCompany($scope.parameter).then(function(company){
           if(company.success){
               $state.go('company');
           }
           console.log(company);
       })

   }

   $scope.goBack = function(){
       $state.go('company');
   }
}