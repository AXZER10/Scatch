const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        typeof: String,
        minlength: 3,
        trim: true
    },
    email: String,
    password: String,
    cart: {
        typeof: Array,
        default: []
    },
    isAdmin: Boolean,
    orders: {
        typeof: Array,
        default: []
    },
    contact: Number,
    imageUrl: String,
})

module.exports = mongoose.model("user", userSchema);