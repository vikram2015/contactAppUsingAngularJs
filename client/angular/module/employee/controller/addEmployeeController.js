var employeeControllerApp = angular.module('addEmployeeController', ['employeeService'])
    .controller('addEmployeeController', addEmployeeController);

function addEmployeeController($scope, $http, $state, employeeService) {


    $scope.companyName = [];
    $scope.selectedCompany;
    $scope.companyNewName;

    
    //This function is for change the company dropdown
    $scope.companyChange = function(){
        $scope.companyNewName = $scope.selectedCompany.companyName;
    }

    //This function is for adding Employee to Database
    $scope.addEmployeeToDB = function () {
        $scope.parameter = {
            employeeId: $scope.formdata.employeeId,
            EmployeeFirstName: $scope.formdata.EmployeeFirstName,
            EmployeeLastName: $scope.formdata.EmployeeLastName,
            companyName: $scope.selectedCompany.companyName,
            employeeAdress: $scope.formdata.employeeAdress,
            employeeContact: $scope.formdata.employeeContact,
            companyId:$scope.selectedCompany._id
        };

        employeeService.addEmployee($scope.parameter).then((employee) => {
            if(employee.success && employee.employee.isTrue){
                $state.go('employee')
            }
        });
    };


    //This is for Back to Employee table
    $scope.goBack = function(){
        $state.go('employee');
    };


    //This start at the time of starting the 
    $scope.$on('$stateChangeSuccess', function (events, args) {
        employeeService.getCompanyList().then(function(company){
            for(var i=0; i<company.company.length; i++){
                $scope.companyName.push(company.company[i]);
            }
            $scope.selectedCompany=$scope.companyName[0];
            $scope.companyNewName = $scope.selectedCompany.companyName
        })
    });



};