const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    perName: String,
    email: {
        require: true,
        type: String
    },
    password: {
        require: true,
        type: String
    },
    age: Number,
    gender: String,
    breed: String,
    original: Boolean,
    location: String,

})

const User = model('User', UserSchema)
module.exports = User