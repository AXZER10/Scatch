require("dotenv").config();
const mongoose = require('mongoose')
const dbgr = require("debug")("dev:mongoose")

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI).then(() => {
    dbgr("Connected Successfully");
}).catch((err) => {
    dbgr(err);
});

module.exports = mongoose.connection;