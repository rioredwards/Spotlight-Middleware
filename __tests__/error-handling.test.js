const request = require('supertest');
const app = require('../lib/app');

describe('error handling', () => {
  it.skip('/error/teapot should return a 418', async () => {
    const resp = await request(app).get('/error/teapot');
    expect(resp.status).toBe(418);
  });
  it.skip('/error/payment should return a 402', async () => {
    const resp = await request(app).get('/error/payment');
    expect(resp.status).toBe(402);
  });
});
