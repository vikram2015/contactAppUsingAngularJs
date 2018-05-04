var contactOperation = require('../database/operation/contactOperations');
var Promise = require('promise');


var saveContact = function (parameter) {

    return new Promise(function (resolve, reject) {
        if (parameter) {
            contactOperation.saveNewContact(parameter)
                .then((result) => {
                    if (result) {
                        resolve(result);
                    } else {
                        reject();
                    }
                });
        } else {
            reject();
        }
    });
};

var getContacts = function () {
    return new Promise((resolve, reject) => {
        contactOperation.getContactList().then((result) => {
            if (result && result.length > 0) {
                resolve(result)
            } else {
                reject();
            }
        });
    })
};

var updateContacts = function (id, parameter) {
    return new Promise((resolve, reject) => {
        if (id && parameter) {
            contactOperation.updateSingleContact(id, parameter)
                .then((result) => {
                    if (result) {
                        resolve(result);
                    } else {
                        reject();
                    }
                })
        } else {
            reject();
        }
    });
};

// var deleteContacts = function (id, isTrue) {
//     return new Promise((resolve, reject) => {
//         if (id && isTrue) {
//             contactOperation.deleteSingleContact(id, isTrue)
//                 .then((result) => {
//                     resolve(result);
//                 });
//         } else {
//             reject();
//         }
//     });
// };

var getAllCompany = function(){
    return new Promise((resolve, reject)=>{
        contactOperation.getCompanyList()
        .then((result)=>{
            if(result){
                resolve(result);
            }else{
                reject();
            }
        })
    })
}


module.exports = {
    saveContact: saveContact,
    getContacts: getContacts,
    updateContacts: updateContacts,
    // deleteContacts: deleteContacts,
    getAllCompany:getAllCompany
}