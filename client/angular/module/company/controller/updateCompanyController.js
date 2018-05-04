var updateCompanyControllerApp = angular.module('updateCompanyController', ['companyService'])
    .controller('updateCompanyController', updateCompanyController);

    function updateCompanyController($scope, $state, companyService){


        $scope.formdata = companyService.getFormData();

        $scope.updateCompanyToDB = function(){

            // console.log($scope.formdata)
            companyService.updateCompanyToDB($scope.formdata).then(function(company){
                console.log(company);
                if(company.success){
                    $state.go('company');
                }
            });
        };

        $scope.goBack = function(){
            $state.go('company')
        }
    }