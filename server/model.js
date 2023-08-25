const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username1: {
        type: String,
        required: true
    },
    email1: {
        type: String,
        required: true
    },
    password1: {
        type: String,
        required: true
    },
   
});

const UserInfo = mongoose.model('UserInfo', UserSchema);
module.exports = UserInfo;