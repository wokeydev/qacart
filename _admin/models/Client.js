var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
    id: {
        type: Number,
        unique: true, 
        required: true,
    },
    name:  {
        type: String, 
        unique: true,
        required: true
    },
    icon_img: {
        type: String,
        required: true,
    }
}, {collection: 'clients'});

module.exports = mongoose.model('Client', clientSchema);


