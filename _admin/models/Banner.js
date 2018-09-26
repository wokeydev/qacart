var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bannerSchema = new Schema({
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
}, {collection: 'banners'});

module.exports = mongoose.model('Banner', bannerSchema);

