var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Companyschema = new Schema({

    _id:{
        type: mongoose.Schema.Types.ObjectId
    },
    companyId:{
        type:String,
        required:false
    },
    companyType:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    companyAdress:{
        type:String,
        required:true
    },
    companyContact:{
        type:String,
        required:true
    },
    isTrue:{
        type:Boolean,
        required:false,
        default:true
    }
});

var company = module.exports = mongoose.model('company', Companyschema);