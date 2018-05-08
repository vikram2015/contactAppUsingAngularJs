var companyOperation = require('../database/operation/companyOperation');
var Promise = require('promise');


var getCompany = function(){
    return new Promise((resolve, reject)=>{
        companyOperation.getAllCompany().then((company)=>{
            if(company){
                resolve(company);
            }else{
                reject();
            }
        });
    });
};


var saveCompany = function(parameter){
    return new Promise((resolve, reject)=>{
        if(parameter){
            companyOperation.saveNewCompany(parameter).then((company)=>{
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


var updateCompany = function(id,parameter){

    return new Promise((resolve, reject)=>{
        if(id && parameter){
            companyOperation.updateTheCompany(id, parameter).then((company)=>{
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


var deleteCompany = function(id){
    return new Promise((resolve, reject)=>{
        if(id){
            companyOperation.deleteTheCompany(id).then((company)=>{
                if(company){
                    resolve(true);
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
    getCompany:getCompany,
    saveCompany:saveCompany,
    updateCompany:updateCompany,
    deleteCompany:deleteCompany
}