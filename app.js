const express = require('express')
const app = express();
const path = require('path')
const fs = require('fs')
// const userModel = require('./models/user-model')
const db = require('./config/mongoose-connection');

const ownersRouter = require('./routes/ownersRouter')
const productsRouter = require('./routes/productsRouter')
const usersRouter = require('./routes/usersRouter')
//Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');

app.use("/owners", ownersRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)


app.listen(3000);