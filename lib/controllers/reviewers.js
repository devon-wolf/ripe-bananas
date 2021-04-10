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
    });
