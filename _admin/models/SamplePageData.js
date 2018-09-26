var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var samplePageDataSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    page: {
        type: String,
        required: true,
    }, 
    image: {
        type: String,
        required:true
    },
    text: {
        type: String,
        required: true
    }
}, {collection: 'samplepageData'});

module.exports = mongoose.model('SamplePageData', samplePageDataSchema);


