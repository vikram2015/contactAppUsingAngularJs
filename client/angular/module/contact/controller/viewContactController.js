var contactControllerApp = angular.module('viewContactController', ['contactService'])
    .controller('viewContactController', viewContactController);

function viewContactController($scope, $state, contactService) {


    $scope.formdata = contactService.getFormData();


     $scope.goBack = function(){
        $state.go('contac');
    }

}