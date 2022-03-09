const request = require('supertest');
const app = require("./Modules/Routes/index.js");


test("It should response the GET method",  async () => {
    await request(app)
    .get("/viewmc")
    .expect(200);
});

//const baseUrl = "https://healthcaresoftwaresystem.el.r.appspot.com/"
// const baseUrl = "localhost:3200/"



