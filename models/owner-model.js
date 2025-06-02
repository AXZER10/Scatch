const mongoose = require('mongoose')

const ownerSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        trim: true
    },
    email: String,
    password: String,
    products: {
        type: Array,
        default: []
    },
    imageUrl: String,
    gstin: String,
})

module.exports = mongoose.model("owner", ownerSchema);