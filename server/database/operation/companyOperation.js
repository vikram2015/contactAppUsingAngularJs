var Company = require('../model/companyModel');
var Promise = require('promise');


var getAllCompany = function () {
    return new Promise((resolve, reject) => {
        Company.find({ isTrue: true })
            .exec()
            .then((company) => {
                if (company) {
                    resolve(company);
                } else {
                    reject();
                }
            });
    });
};


var saveNewCompany = function(parameter){
    return new Promise((resolve, reject)=>{
        if(parameter){
            var company = new Company(parameter);
            company.save().then((company)=>{
                if(company){
                    resolve(company);
                }else{
                    reject();
                }
            });
        }else{
            resolve(false);
        }
    });
};



var updateTheCompany = function(id, parameter){
    console.log(id)
    console.log(parameter)
    return new Promise((resolve, reject)=>{
        if(id && parameter){
            Company.findByIdAndUpdate(id,{$set:parameter})
            .exec()
            .then((company)=>{
                if(company){
                    resolve(company);
                }else{
                    reject();
                }
            });
        }else{
            resolve(false);
        }
    });
};



var deleteTheCompany = function(id){
    return new Promise((resolve, reject)=>{
        if(id){
            Company.findByIdAndUpdate(id,{$set:{isTrue:false}})
            .exec()
            .then((company)=>{
                if(company){
                    resolve(company);
                }else{
                    reject();
                }
            });
        }else{
            resolve(false);
        }
    });
};



module.exports = {
    getAllCompany:getAllCompany,
    saveNewCompany:saveNewCompany,
    updateTheCompany:updateTheCompany,
    deleteTheCompany:deleteTheCompany
}