const request = require('supertest');
const app = require('../lib/app');

describe('color routes', () => {
  it.skip('/colors/purple should return ["red", "blue"]', async () => {
    const resp = await request(app).get('/colors/purple');
    expect(resp.body).toEqual(['red', 'blue']);
  });
  it.skip('/colors/orange should return ["red", "yellow"]', async () => {
    const resp = await request(app).get('/colors/orange');
    expect(resp.body).toEqual(['red', 'yellow']);
  });
  it.skip('/colors/green should return ["red", "blue"]', async () => {
    const resp = await request(app).get('/colors/green');
    expect(resp.body).toEqual(['yellow', 'blue']);
  });
  it.skip('/colors/red-orange should return ["red", "red", "yellow"]', async () => {
    const resp = await request(app).get('/colors/red-orange');
    expect(resp.body).toEqual(['red', 'red', 'yellow']);
  });
  it.skip('/colors/blue-green should return ["blue", "blue", "yellow"]', async () => {
    const resp = await request(app).get('/colors/blue-green');
    expect(resp.body).toEqual(['blue', 'blue', 'yellow']);
  });
});
