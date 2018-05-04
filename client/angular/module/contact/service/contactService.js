var myModule = angular.module('contactService', []);
myModule.factory('contactService', function ($http, $q) {


  var contactData = {};
  var formdata = {}

  /*
  This method is for getting all the contact list from database
  */
  contactData.getAllContacts = function () {
    return $http.get('/contact/getContacts')
      .then(function (data) {
        return (data.data);
      });
  };

  /**
   * This method is for adding the new contact to database
   */
  contactData.addContacts = function (contactList) {
    return $http.post('/contact/addContacts', contactList)
      .then(function (data) {
        return (data.data);
      });
  };

  /*
  *This method is for updating the contact in database
  */
  contactData.updateContact = function (parameter) {
    return $http.post('/contact/updateContacts', { _id: parameter._id, parameter })
      .then(function (data) {
        if (data.data.success) {
          return (data.data);
        }
      });
  };


  /**
   * This method is for deleting the contact from database basically we are not doing hard delete
   * here we are using soft delete means we only do isTrue flag false.
   */
  contactData.deleteContactFromDB = function (parameter) {
    return $http.post('/contact/deleteContacts', parameter)
      .then(function (data) {
        return (data.data);
      });
  };

/**
 * This method is for getting all the company present in the database for setting it in the drop down menu
 */
  contactData.getCompanyList = function () {
    return $http.get('/contact/getAllCompany')
      .then(function (company) {
        if (company.data.success) {
          return (company.data);
        }
      });
  };

/**
 * This method is for setting the contact info from different controller, 
 * basically we use this as a setter method.
 */
  contactData.setFormData = function (contact) {
    formdata = contact;
  }

  /**
   * This method is used for getting the contact to different controller,
   * basically we use it as a getter method.
   */
  contactData.getFormData = function () {
    return formdata;
  }



  return contactData;
});