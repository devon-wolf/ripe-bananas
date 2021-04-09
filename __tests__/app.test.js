const db = require('../lib/utils/database');
const request = require('supertest');
const app = require('../lib/app');

describe('ripe-bananas routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

});
