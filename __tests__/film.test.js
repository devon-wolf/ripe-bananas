// require('../models/associations');

const db = require('../lib/utils/database');
const request = require('supertest');
const app = require('../lib/app');
const Film = require('../lib/models/Film');

const film = {
  title: 'Forgotten Martians',
  studio: 7,
  released: 1976,
  //   cast: [
  //     {
  //       role: 'Gerard Socksmith',
  //       actor: 14,
  //     },
  //   ],
};

describe('ripe-bananas film routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });
  beforeEach(async () => {
    originalFilm = await Film.create(film);
  });

  it('creates a new Film', () => {
    const newFilm = {
      title: 'The Vacant Owl',
      studio: 6,
      released: 2011,
      //   cast: [
      //     {
      //       role: 'Mary Feather',
      //       actor: 20,
      //     },
      //   ],
    };

    return request(app)
      .post('/api/v1/films')
      .send(newFilm)
      .then((res) => {
        expect(res.body).toEqual({
          ...newFilm,
          id: 2,
        });
      });
  });

  it('gets all films', () => {
    return request(app)
      .get('/api/v1/films')
      .then((res) => {
        expect(res.body).toEqual([
          {
            id: 1,
            title: 'Forgotten Martians',
            studio: 7,
            released: 1976,
          },
        ]);
      });
  });
});
