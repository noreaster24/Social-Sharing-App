const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Username is required',
        trim: true
    },
    email: {
        type: String,
        required: 'Email address is required',
        unique: true,
        match: [/.+@.+\..+/]
    },
    thoughts: {// array of _id values referencing the Though model

    },
    friends: { // array of _id values referencing User model (self referencing)

    },
    // toJSON: {
    //     virtuals: true,
    //     getters: true
    // },
    id: false
});



const User = model('User', UserSchema);

module.exports = User;

