require('dotenv').config();
const { URI_MONGODB } = process.env;
const mongoose = require('mongoose');


const connection = async () => {
    await mongoose.connect(URI_MONGODB);
    console.log('DB listen');
}

module.exports = connection;