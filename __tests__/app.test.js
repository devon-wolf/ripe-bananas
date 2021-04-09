const db = require('../lib/utils/database');
const request = require('supertest');
const app = require('../lib/app');

describe('ripe-bananas routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  it('creates a new Studio', () => {
    const newStudio = {
      name: 'Star Studios',
      city: 'Portland',
      state: 'Oregon',
      country: 'United States'
    };

    return request(app)
      .post('/api/v1/studios')
      .send(newStudio)
      .then((res) =>  {
        expect(res.body).toEqual({
          ...newStudio,
          id: 1
        })
      })
  })

});
