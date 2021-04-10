const {Router} = require('express');
const Reviewer = require('../models/Reviewer');

module.exports = Router().post('/', async (req, res, next) => {
    try {
        const reviewer = await Reviewer.create(req.body);
        res.send(reviewer);
    } catch (err) {
        next(err);
    }
})
    .get('/', async (req, res, next) => {
        try {
            const reviewer = await Reviewer.findAll();
            res.send(reviewer);
        } catch (err) {
            next(err);
        }
    })
    .put('/:id', async (req, res, next) => {
        try {
            const reviewer = await Reviewer.update(req.body, {
                where: {id: req.params.id},
                returning: true,
            });
            res.send(reviewer[1][0]);
        } catch (err) {
            next(err);
        }
    });