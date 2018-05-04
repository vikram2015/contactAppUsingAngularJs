var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    number:
    {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    isTrue: {
        type: Boolean,
        required: false
    }
});

var contacts = module.exports = mongoose.model('contacts', ContactSchema);

