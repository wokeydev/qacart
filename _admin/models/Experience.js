var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var experienceSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    amount_num: {
        type: Number,
        required:true
    },
    description: {
        type: String,
        required: true
    }
}, {collection: 'experiences'});

module.exports = mongoose.model('Experience', experienceSchema);