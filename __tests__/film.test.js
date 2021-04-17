require('../lib/models/associations');

const db = require('../lib/utils/database');
const request = require('supertest');
const app = require('../lib/app');
const Film = require('../lib/models/Film');
const Studio = require('../lib/models/Studio');
const Actor = require('../lib/models/Actor');

const actor = {
  name: 'Robert Downey Jr',
  dob: '1965-04-04',
  pob: 'Manhattan, New York, NY',
};

const film = {
  title: 'Forgotten Martians',
  released: 1976,
  StudioId: 1,
  ActorId: 1,
  //   cast: [
  //     {
  //       role: 'Gerard Socksmith',
  //       actor: 14,
  //     },
  //   ],
};

const studio = {
  name: 'Star Studios',
  city: 'Portland',
  state: 'Oregon',
  country: 'United States',
};

const fakeRole = {
  FilmId: 1,
  ActorId: 1,
  role: 'Jim'
};

const fakeCast = [fakeRole];

describe('ripe-bananas film routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });
  beforeEach(async () => {
    originalActor = await Actor.create(actor);
  });
  beforeEach(async () => {
    originalStudio = await Studio.create(studio);
  });
  beforeEach(async () => {
    originalFilm = await Film.create(film, { include: [actor] });
  });

  it.only('creates a new Film', () => {
    const newFilm = {
      title: 'The Vacant Owl',
      released: '2011',
      cast: fakeCast
    };

    return request(app)
      .post('/api/v1/films')
      .send({
        ...newFilm,
        StudioId: 1,
        ActorId: 1
        })
      .then((res) => {
        expect(res.body).toEqual({
          ...newFilm,
          StudioId: 1,
          ActorId: 1,
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
            StudioId: 1,
            ActorId: 1,
            released: '1976',
          },
        ]);
      });
  });

  it.skip('gets a single film by id', () => {
    return request(app)
      .get('/api/v1/films/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          title: 'Forgotten Martians',
          StudioId: 1,
          released: '1976',
          cast: actor,
        });
      });
  });
});
