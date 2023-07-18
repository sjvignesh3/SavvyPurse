const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    newUserEmail: {
        type: String,
        required: true
    },
    newUserPassword1: {
        type: String,
        required: true
    },
    newUserPassword2: {
        type: String,
        required: true
    }
});

const Info = mongoose.model('Info', UserSchema);
module.exports = Info;