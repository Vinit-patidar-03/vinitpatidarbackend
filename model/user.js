const mongoose = require('mongoose');

const USER = new mongoose.Schema({
    name: {
         type : String,
         required: true,
         timestamp: Date.now
    },
    email : {
        type: String,
        required: true,
        timestamp: Date.now
    },
    message:{
        type: String,
        required:true,
        timestamp: Date.now
    }
})

const user = mongoose.model('user',USER);
module.exports = user;