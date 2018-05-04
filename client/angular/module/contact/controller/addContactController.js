var addcontactControllerApp = angular.module('addContactController', ['contactService'])
    .controller('addContactController', addContactController);

function addContactController($scope, $http, contactService, $state) {

    $scope.contactList = {};


    function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

    $scope.addContact = function(){
        if($scope.formdata.firstName){
            $scope.formdata.firstName = capitalizeFirstLetter($scope.formdata.firstName)
            console.log($scope.firstName)
        }
        if($scope.formdata.lastName){
            $scope.formdata.lastName = capitalizeFirstLetter($scope.formdata.lastName)
        }

        
        $scope.contactList = {
            firstName:$scope.formdata.firstName,
            lastName:$scope.formdata.lastName,
            adress:$scope.formdata.adress,
            contact:$scope.formdata.contact,
            isTrue:true
        }
        console.log($scope.contactList);
        contactService.addContacts($scope.contactList).then((data)=>{
                if(data.success){
                    console.log('000000000000')
                    $state.go('contac');
                }
        })
    }

    function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

    $scope.goBack = function(){
        $state.go('contac');
    }

    
    $scope.$on('$stateChangeSuccess', function (events, args) {
    })

}