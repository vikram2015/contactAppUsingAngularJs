var viewEmployeeControllerApp = angular.module('viewEmployeeController', ['employeeService'])
    .controller('viewEmployeeController', viewEmployeeController);

    function viewEmployeeController($scope, $state, employeeService){


        $scope.formdata = employeeService.getFormData();

        $scope.goBack = function(){
            $state.go('employee');
        }


    };