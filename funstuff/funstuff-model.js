const db = require("../data/dbconfig.js");

const getStuff = () => {
    return db("funstuff");
}

const addStuff = (item) => {
    return db("funstuff").insert(item)
}

module.exports = {
    getStuff, 
    addStuff
}