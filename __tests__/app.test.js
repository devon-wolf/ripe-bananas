const db = require('../lib/utils/database');
const request = require('supertest');
const app = require('../lib/app');
const Studio = require('../lib/models/Studio');

const studio = {
  name: 'Star Studios',
  city: 'Portland',
  state: 'Oregon',
  country: 'United States',
};

describe.skip('ripe-bananas routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });
  beforeEach(async () => {
    originalStudio = await Studio.create(studio);
  });

  it.skip('creates a new Studio', () => {
    const newStudio = {
      name: 'Star Studios',
      city: 'Portland',
      state: 'Oregon',
      country: 'United States',
    };

    return request(app)
      .post('/api/v1/studios')
      .send(newStudio)
      .then((res) => {
        expect(res.body).toEqual({
          ...newStudio,
          id: 2,
        });
      });
  });
  it('gets all Studios', async () => {
    return request(app)
      .get('/api/v1/studios')
      .then((res) => {
        expect(res.body).toEqual([
          {
            ...studio,
            id: 1,
          },
        ]);
      });
  });
  it('gets a Studio by id', async () => {
    return request(app)
      .get('/api/v1/studios/1')
      .then((res) => {
        expect(res.body).toEqual({
          ...studio,
          id: 1,
        });
      });
  });
  // it('updates a Studio by id', async () => {
  //   return request(app)
  //     .patch('/api/v1/studios/1')
  //     .send({
  //       name: 'Bar Studios',
  //       city: 'Bortland',
  //       state: 'Boregon',
  //       country: 'Bunited Bates'
  //     })
  //     .then((res) => {
  //       expect(res.body).toEqual({
  //         name: 'Bar Studios',
  //         city: 'Bortland',
  //         state: 'Boregon',
  //         country: 'Bunited Bates',
  //         id: 1
  //       })
  //     })
  // })
});
