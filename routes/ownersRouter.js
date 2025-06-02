const express = require('express')
const router = express.Router();
const ownerModel = require('../models/owner-model')

router.get("/", function (req, res) {
    res.send("Hi")
})

if (process.env.NODE_ENV == "development") {
    router.post("/create", async function (req, res) {
        let owners = await ownerModel.find()
        if (owners.length > 0) {
            return res.status(503).send("You dont have permission to create");
        }
        let { fullname, mail, pass } = req.body;
        let createdOwner = await ownerModel.create({
            name: fullname,
            email: mail,
            password: pass,
        })
        res.status(201).send(createdOwner);
    })
}

module.exports = router;