'use strict'

var userRegistrationControllerApp = angular.module('userRegistrationController', ['userService'])
    .controller('userRegistrationController', userRegistrationController);

function userRegistrationController($scope, $http, $log, $state, $stateParams, $rootScope, userService) {

    $scope.maleValue = "male";

    // console.log($scope.formdata)

    $scope.addUserRegistration = function () {
        if ($scope.formdata) {
            if (!$scope.formdata.gender) {
                $scope.formdata.gender = $scope.maleValue;
            }
        }
        userService.saveUserRegistration($scope.formdata).then((user)=>{
            if(user.success){
                $state.go('/')
            }
        })
    }

    $scope.$on('$stateChangeSuccess', function (events, args) {

    })



}