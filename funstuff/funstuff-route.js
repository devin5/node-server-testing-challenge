
const express = require("express");

const stuffRoute = express.Router();

const Stuff = require("./funstuff-model");

stuffRoute.get("/", (req, res) => {
    Stuff.getStuff()
        .then(stuff => {
            res.status(200).json(stuff)
        })
        .catch(err => {
            res.status(500).json({ message: "We couldn't get your stuff..."})
        })
})

stuffRoute.post("/", (req, res) => {
    Stuff.addStuff(req.body, "id")
        .then(item => {
            res.status(200).json(item);
        })
        .catch(err => {
            res.status(500).json({ message: "ruh-roh"})
        })
})


module.exports = stuffRoute;