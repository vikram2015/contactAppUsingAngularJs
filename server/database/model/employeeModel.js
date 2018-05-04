var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmployeeModel = new Schema({

    _id:{
        type: mongoose.Schema.Types.ObjectId
    },
    employeeId:{
        type:String,
        required:true
    },
    EmployeeFirstName:{
        type:String,
        required:true
    },
    EmployeeLastName:{
        type:String,
        required:false
    },
    companyName:{
        type:String,
        required:true
    },
    employeeAdress:{
        type:String,
        required:false
    },
    employeeContact:{
        type : Number,
        required:false
    },
    companyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'company',
        required:true
    },
    isTrue:{
        type:Boolean,
        required:false,
        default:true
    }
});

// EmployeeModel.index({contacts:1});
var employee = module.exports = mongoose.model('employee', EmployeeModel);