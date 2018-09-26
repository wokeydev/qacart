var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var menuSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true,
    }, 
    linkUrl: {
        type: String,
        required:true
    }
}, {collection: 'menus'});

module.exports = mongoose.model('Menu', menuSchema);


