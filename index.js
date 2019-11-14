const express = require("express");
const server = express();

const stuffRoute = require("./funstuff/funstuff-route");

server.use(express.json());
server.use("/api/funstuff", stuffRoute);

const port = 3333;


server.listen(port, () => {
    console.log("WOOHOOOO!")
})

server.get("/", (req, res) => {
    res.send("I work!!!")
})

module.exports = server;