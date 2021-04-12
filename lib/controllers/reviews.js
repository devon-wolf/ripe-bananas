const { Router } = require('express');
const Review = require('../models/Review');

module.exports = Router()
	.post('/', (req, res, next) => {
		Review
			.create(req.body)
			.then(review => res.send(review))
			.catch(next);
	})
	.get('/', (req, res, next) => {
		Review
			.findAll()
			// need to sort the reviews by rating before slicing
			.then(reviews =>
				res.send(reviews
					.sort((a, b) => b.rating - a.rating)
					.slice(0, 100)))
			.catch(next);
	})
	.delete('/:id', (req, res, next) => {
		Review
			.destroy({
				where: { id: req.params.id }
			})
			.then(() => res.send({ reviewStatus: 'DESTROYED' }))
			.catch(next);
	});