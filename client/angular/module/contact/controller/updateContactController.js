var updatecontactControllerApp = angular.module('updateContactController', ['contactService'])
    .controller('updateContactController', updateContactController);

function updateContactController($scope, $http, $state, contactService) {

    $scope.formdata = contactService.getFormData()
    console.log($scope.formdata);

    $scope.updateContactList = function(){
        if($scope.formdata.firstName){
            contactService.updateContact($scope.formdata).then((data)=>{
                if(data.success){
                    $state.go('contac');
                }else{
                    alert('something went wrong');
                }
            })
        }
    }

    $scope.goBack = function(){
        $state.go('contac');
    }
     

    $scope.$on('$stateChangeSuccess', function (events, args) {
    })

}