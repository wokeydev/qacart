var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactUsSchema = new Schema({
    id: {
        type: Number,
        unique: true, 
        required: true,
    },
    title: {
        type: String,
        required: true,
    }, 
    description: {
        type: String,
        required:true
    }
}, {collection: 'contactus'});

module.exports = mongoose.model('ContactUs', contactUsSchema);

