'use strict'

var contactControllerApp = angular.module('contactController', ['contactService'])
    .controller('contactController', contactController);

function contactController($scope, $http, $log, $state, $stateParams, $rootScope, contactService) {


    $scope.contactList = [];
    $scope.companyName = [];
    $scope.selectedCompany;



    $scope.saveContact = function () {
        $state.go('employee');
    }

    $scope.addContact = function () {
        $state.go('addContact');
    }

    $scope.updateContact = function (contact) {
        contactService.setFormData(contact);
        $state.go('updateContact', contact);
    }


    $scope.viewContact = function (contact) {
        contactService.setFormData(contact);
        $state.go('viewContact');
    }


    $scope.deleteContact = function (contact, index) {
        var result = confirm("Really want to delete");
        if (result == true) {
            var parameter = {
                _id: contact._id,
                isTrue: false
            }
            contactService.deleteContactFromDB(parameter).then(function (data) {
                if (data.data.isTrue == false) {
                    $scope.contactList.splice(index, 1);
                }
            })
        } else {
            console.log(result);
        }
    }


    $scope.selectEmployeeForCompany = function () {
        console.log($scope.selectedCompany)

    }



    $scope.$on('$stateChangeSuccess', function (events, args) {
        contactService.getAllContacts().then(function (data) {
            $scope.contactList = data.contact;
        });

        contactService.getCompanyList().then(function (company) {
            console.log(company);
            for (var i = 0; i < company.company.length; i++) {
                $scope.companyName.push(company.company[i]);
            }
            $scope.selectedCompany = $scope.companyName[0];
        })
    })



}