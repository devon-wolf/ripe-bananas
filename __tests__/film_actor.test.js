// require('../models/associations');

const db = require('../lib/utils/database');
const request = require('supertest');
const app = require('../lib/app');
const Film_Actor = require('../lib/models/Film_Actor');

const role = {
  role: 'Seventh Astronaut',
  actor: 38,
  film: 117,
};

describe('ripe-bananas film_actor routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });
  beforeEach(async () => {
    originalRole = await Film_Actor.create(role);
  });

  it('creates a new role', () => {
    const newRole = {
      role: 'Father of Robert',
      actor: 62,
      film: 30,
    };

    return request(app)
      .post('/api/v1/films_actors')
      .send(newRole)
      .then((res) => {
        expect(res.body).toEqual({
          ...newRole,
          id: 2,
        });
      });
  });

  it('gets all roles', () => {
    return request(app)
      .get('/api/v1/films_actors')
      .then((res) => {
        expect(res.body).toEqual([
          {
            id: 1,
            role: 'Seventh Astronaut',
            actor: 38,
            film: 117,
          },
        ]);
      });
  });

  //   it('gets a single film by id', () => {
  //     return request(app)
  //       .get('/api/v1/films/1')
  //       .then((res) => {
  //         expect(res.body).toEqual({
  //           id: 1,
  //           title: 'Forgotten Martians',
  //           studio: 7,
  //           released: 1976,
  //         });
  //       });
  //   });
});
