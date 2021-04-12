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
			.then(reviews => res.send(reviews.slice(0, 101)))
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