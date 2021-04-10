// require('../lib/models/associations');
const db = require('../lib/utils/database');
const request = require('supertest');
const app = require('../lib/app');
const Review = require('../lib/models/Review');

// const seedReview = {
// 	rating: 2,
// 	reviewer: 1,
// 	review: 'This is almost the worst thing ever',
// 	film: 1
// }

describe('reviews routes', () => {
	beforeEach(() => {
		return db.sync({ force: true });
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
				id: 1,
				...newReview
			}));
	});


});