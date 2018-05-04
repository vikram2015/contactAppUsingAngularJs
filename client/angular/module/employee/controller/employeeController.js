var contactControllerApp = angular.module('employeeController', ['employeeService'])
    .controller('employeeController', employeeController);

function employeeController($scope, $http, $state, employeeService) {

    $scope.employeeList = [];
    $scope.companyName = [];
    $scope.selectedCompany;

    $scope.addEmployee = function () {
        console.log($scope.selectedCompany)
        $state.go('addEmployee');
    }

    $scope.updateEmployee = function (employee) {
        $state.go('updateEmployee');
        employeeService.setFormData(employee);
    }

    $scope.deleteEmployee = function (employee, index) {
        employeeService.deleteContactFromDB(employee).then((deletedEmployee) => {
            if (deletedEmployee.success && deletedEmployee.employee.isTrue == false) {
                $scope.employeeList.splice(index, 1);
            }
        })
    };

    $scope.viewEmployee = function(employee){
        employeeService.setFormData(employee);
        $state.go('viewEmployee');
    }

    $scope.selectEmployeeForCompany = function(){
        console.log($scope.selectedCompany);
        employeeService.getEmployForCompany($scope.selectedCompany._id)
            .then(function(company){
                console.log(company)
                $scope.employeeList = company.company;
            })
    }



    $scope.$on('$stateChangeSuccess', function (events, args) {

        employeeService.getEmployeeList().then(function (employee) {
            $scope.employeeList = employee.employee;
        });

        employeeService.getCompanyList().then(function(company){
            console.log(company);
            for(var i=0; i<company.company.length; i++){
                $scope.companyName.push(company.company[i]);
            }
            $scope.selectedCompany=$scope.companyName[0];
            console.log($scope.companyName)
        })
    });



};