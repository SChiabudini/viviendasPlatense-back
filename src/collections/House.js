const { Schema, model } = require('mongoose');

const houseSchema = new Schema({
    type: {
        type: String,
        require: true
    },
    
    size: {
        type: Number,
        require: true
    },
    
    price: {
        type: Number,
        require: true
    },
    
    images: {
        type: [String],
        require: true
    },

    rooms: {
        type: String
    }
});

module.exports = model('House', houseSchema);