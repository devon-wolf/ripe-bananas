const Review = require('../models/Review');

const createFakeReviews = async (quantity) => {
	while(quantity > 0) {
		await Review.create({
			rating: Math.ceil(Math.random() * 5),
			review: 'Blah blah blah blah blah',
			FilmId: Math.ceil(Math.random() * 20),
			ReviewerId: Math.ceil(Math.random() * 10)
		});

		quantity--;
	}
};

module.exports = { createFakeReviews };