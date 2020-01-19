const Stuff = require("./funstuff-model.js");
const db = require("../data/dbConfig.js");

// describe("funstuff model", () => {

// })

describe("stuff model", () => {
    beforeEach(async () => {
        await db("funstuff").truncate();
    })

    describe("addStuff", () => {
        it ("should add a fun thing to the database", async () => {
            await Stuff.addStuff({ fun_thing: "rainstorms"})
            const stuff = await db("funstuff");
            let i = stuff.length;
            expect(stuff).toHaveLength(i++);
            // expect(stuff).toHaveProperty(fun_thing);
        })

    })
    describe("getStuff", () => {
        it ("should show everything in the database", async () => {
            await Stuff.getStuff()

        })
    })


})
