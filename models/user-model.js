const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        trim: true
    },
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    imageUrl: String,
})

module.exports = mongoose.model("user", userSchema);