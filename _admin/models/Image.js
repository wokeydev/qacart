var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new Schema({
    id: {
        type: Number,
        unique: true, 
        required: true,
    },
    phone_img: {
        type: String,
        required: true,
    }, 
    desktop_img: {
        type: String,
        required:true
    },
    alt_text: {
        type: String,
        required: true
    }
}, {collection: 'images'});

module.exports = mongoose.model('Image', imageSchema);


