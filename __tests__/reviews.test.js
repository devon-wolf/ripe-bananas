require('../lib/models/associations');
const db = require('../lib/utils/database');
const request = require('supertest');
const app = require('../lib/app');
const { createFakeReviews } = require('../lib/utils/data-generator');

const seedReview = {
  rating: 2,
  review: 'This is almost the worst thing ever',
};

const reviewer = {
  name: 'Amadaeus Coconut',
  company: 'Island Time Reviews',
};

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

describe.skip('reviews routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  beforeEach(async () => {
    await request(app).post('/api/v1/reviewers').send(reviewer);

    await request(app).post('/api/v1/films').send(film);

    await request(app)
      .post('/api/v1/reviews')
      .send({
        ...seedReview,
        ReviewerId: 1,
        FilmId: 1,
      });
  });

  it('creates a new review', () => {
    const newReview = {
      rating: 5,
      review: 'This is amazing',
    };

    return request(app)
      .post('/api/v1/reviews')
      .send({
        ...newReview,
        ReviewerId: 1,
      })
      .then((res) =>
        expect(res.body).toEqual({
          id: 2,
          ...newReview,
        })
      );
  });

  it('gets all reviews', () => {
    return request(app)
      .get('/api/v1/reviews')
      .then((res) =>
        expect(res.body).toEqual([
          {
            id: 1,
            ...seedReview,
          },
        ])
      );
  });

  it('correctly truncates and sorts reviews', async () => {
    await createFakeReviews(200);

    return request(app)
      .get('/api/v1/reviews')
      .then((res) => {
        expect(res.body.length).toBeLessThan(101);
        res.body.forEach((review, i) => {
          if (i < res.body.length - 1)
            expect(review.rating).toBeGreaterThanOrEqual(
              res.body[i + 1].rating
            );
        });
      });
  });

  it('deletes a review', () => {
    return request(app)
      .delete('/api/v1/reviews/1')
      .then((res) => expect(res.body).toEqual({ reviewStatus: 'DESTROYED' }));
  });
});
