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
    
    image: {
        type: String,
        require: true
    }
});

module.exports = model('House', houseSchema);