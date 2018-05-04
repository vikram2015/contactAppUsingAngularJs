var Contact = require('../model/contactModels');
var Company = require('../model/companyModel');
var Promise = require('promise');

var saveNewContact = function (parameter) {
    return new Promise((resolve, reject) => {
        if (parameter) {
            var contact = new Contact(parameter);
            contact.save().then((result) => {
                resolve(result);
                // res.status(201).send({
                //     success: true,
                //     MSG: 'Contact saved successfully',
                //     contact: result
                // });
            });
            // .catch((err) => {
            //     console.log(err);
            //     res.status(500).send({
            //         error: err
            //     });
            // });
        } else {
            reject();
        }
    });
};

var getContactList = function () {
    return new Promise((resolve, reject) => {
        Contact.find({ isTrue: true })
            .exec()
            .then((result) => {
                // console.log(result);
                if (result && result.length > 0) {
                    resolve(result);
                } else {
                    reject();
                }
            });
    });
};


var updateSingleContact = function (id, parameter) {

    return new Promise((resolve, reject) => {
        Contact.findByIdAndUpdate(id, { $set: parameter }).then((result) => {
            if (result) {
                resolve(result);
            } else {
                reject();
            }
        });
    });
};

// var deleteSingleContact = function(id, isTrue){

//     return new Promise((resolve, reject)=>{

//         // if(id && isTrue){
//             console.log('11111111')
//             Contact.findByIdAndUpdate({_id:id}, {$set:  { isTrue: isTrue }})
//             .then((result)=>{
//                 console.log(result);
//                 // if(result.isTrue == true){
//                 //     result.isTrue == false
//                 // }
//                 resolve(result);
//             });
//         // }else{
//             // reject();
//         // }

//     })


// }


var getCompanyList = function () {
    return new Promise((resolve, reject) => {
        Company.find()
            .exec()
            .then((result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject();
                }
            })
    })
}

module.exports = {
    saveNewContact: saveNewContact,
    getContactList: getContactList,
    updateSingleContact: updateSingleContact,
    // deleteSingleContact:deleteSingleContact,
    getCompanyList: getCompanyList
}
