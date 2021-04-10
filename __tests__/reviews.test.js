// require('../lib/models/associations');
const db = require('../lib/utils/database');
const request = require('supertest');
const app = require('../lib/app');
const Review = require('../lib/models/Review');

const seedReview = {
	rating: 2,
	ReviewerId: 1,
	review: 'This is almost the worst thing ever',
	FilmId: 2
}

describe('reviews routes', () => {
	beforeEach(() => {
		return db.sync({ force: true });
	});

	beforeEach(async () => {
		await request(app)
			.post('/api/v1/reviews')
			.send(seedReview);
	});

	it('creates a new review', () => {
		const newReview = {
			FilmId: 1,
			ReviewerId: 1,
			rating: 5,
			review: 'This is amazing',
		};

		return request(app)
			.post('/api/v1/reviews')
			.send(newReview)
			.then(res => expect(res.body).toEqual({
				id: 2,
				...newReview
			}));
	});


	it('gets all reviews', () => {
		return request(app)
			.get('/api/v1/reviews')
			.then(res => expect(res.body).toEqual([{
				id: 1,
				...seedReview
			}]));
	});

	it('deletes a review', () => {
		return request(app)
			.delete('/api/v1/reviews/1')
			.then(res => expect(res.body).toEqual({ status: 'DESTROYED' }));
	});
});