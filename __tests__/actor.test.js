require('../lib/models/associations');
const db = require('../lib/utils/database');
const request = require('supertest');
const app = require('../lib/app');
const Actor = require('../lib/models/Actor');
const Film = require('../lib/models/Film');
const Studio = require('../lib/models/Studio');

const actor = {
  name: 'Robert Downey Jr',
  dob: '1965-04-04',
  pob: 'Manhattan, New York, NY',
};

const studio = {
  name: 'Star Studios',
  city: 'Portland',
  state: 'Oregon',
  country: 'United States',
};

const film = {
  title: 'Iron Man',
  released: '2008-05-02',
  StudioId: 1,
  ActorId: 1,
};

describe('ripe-banana actor routes', () => {
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
    originalFilm = await Film.create(film);
  });

  it('creates a new Actor', () => {
    const newActor = {
      name: 'Robert Downey Jr',
      dob: '1965-04-04',
      pob: 'Manhattan, New York, NY',
    };

    return request(app)
      .post('/api/v1/actors')
      .send(newActor)
      .then((res) => {
        expect(res.body).toEqual({
          ...newActor,
          id: 2,
        });
      });
  });
  it('gets all Actors', async () => {
    return request(app)
      .get('/api/v1/actors')
      .then((res) => {
        expect(res.body).toEqual([
          {
            ...actor,
            id: 1,
          },
        ]);
      });
  });

  it('gets an actor by id with Film Join', async () => {
    // await request(app).post('/api/v1/films').send(film);

    return request(app)
      .get('/api/v1/actors/1')
      .then((res) => {
        console.log(res.body);
        console.log(film);
        expect(res.body).toEqual({
          ...actor,
          id: 1,
          Films: [{ ...film, id: 1 }],
        });
      });
  });
});
