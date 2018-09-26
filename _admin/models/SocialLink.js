var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sociallinkSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true
    },
    linkUrl: {
        type: String,
        required:true
    }
}, {collection: 'sociallinks'});

module.exports = mongoose.model('SocialLink', sociallinkSchema);


