const { Schema, model } = require('mongoose');

const portfolioSchema = new Schema({
    text: {
        type: String
    },
    
    image: {
        type: String
    },

    video: {
        type: String
    }
});

module.exports = model('Portfolio', portfolioSchema);