var updateEmployeeControllerApp = angular.module('updateEmployeeController', ['employeeService'])
    .controller('updateEmployeeController', updateEmployeeController);

function updateEmployeeController($scope, $http, $state, employeeService) {


    $scope.formdata = employeeService.getFormData();

    $scope.updateEmployee = function () {
        employeeService.updateEmployeeData($scope.formdata).then((employee) => {
            if (employee.success && employee.employee.isTrue) {
                $state.go('employee');
            }
        })
    }

    //This is for Back to Employee table
    $scope.goBack = function () {
        $state.go('employee');
    };
}