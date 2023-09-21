const supertest = require('supertest');
const app = require('../index');

test('GET /stocks', async () => {
    const response = await supertest(app).get('/stocks');
    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('stocks');
    expect(response.body.stocks).toHaveLength(100);
});

test('GET /stocks?_limit=10', async () => {
    const response = await supertest(app).get('/stocks?_limit=10');
    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('stocks');
    expect(response.body.stocks).toHaveLength(10);
});

test('GET /stocks?_limit=1000', async () => {
    const response = await supertest(app).get('/stocks?_limit=1000');
    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('stocks');
    expect(response.body.stocks).toHaveLength(100);
})

test('GET /stocks?_limit=0', async () => {
    const response = await supertest(app).get('/stocks?_limit=0');
    expect(response.status).toEqual(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toEqual("Invalid _limit param");
})

test("GET /stocks?_limit=abc", async () => {
    const response = await supertest(app).get("/stocks?_limit=abc");
    expect(response.status).toEqual(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toEqual("Invalid _limit param");
});