const request = require('supertest');
const assert = require('assert');
const { app } = require('../../index.js');

describe('The API', () => {
  it('returns statistics with correct number of states', async function () {
    const resp = await request(app).get('/api/statistics').expect(200);
    const states = 56;
    assert.deepEqual(resp.body.length, states);
  }).timeout(10000);

  it('returns statistics with correct keys', async function () {
    const resp = await request(app).get('/api/statistics').expect(200);
    const expectedKeys = ['state', 'name', 'recovered', 'hospitalizedCurrently', 'deaths', 'deathsPast3days'];
    assert.deepEqual(Object.keys(resp.body[0]), expectedKeys);
  }).timeout(10000);
});
