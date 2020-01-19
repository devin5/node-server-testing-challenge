const request = require("supertest");
const server = require("../index.js");
const stuffRoute = require("./funstuff-route")


describe("GET /", () => {
    //should return http 200

    it ("should return 200 http status code", () => {

            // const expectedStatusCode = 200;
            // const response = await request(stuffRoute).get("/");
            // expect(response.status).toEqual(expectedStatusCode);
            return request(server).get("/").expect(200);
    })

    it ("should return JSON", () => {
        const response = request(server).get("/");

        expect(response.type);
    })
    
    // it ('should return { api: "up" } ', async () => {
    //     const response = await request(server).get("/");

    //     expect(response.body).toEqual({ api: "up"})
    //     expect(response.body.api).toBe('up');
    // })
    //should return json
    //should return an object with an api property with the value of "up"
})