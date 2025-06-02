const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        trim: true
    },
    price: Number,
    isAdmin: Boolean,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String,
    imageUrl: String,
})

module.exports = mongoose.model("product", productSchema);