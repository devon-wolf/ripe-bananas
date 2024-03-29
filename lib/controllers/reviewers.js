const {Router} = require('express');
const Reviewer = require('../models/Reviewer');
const Review = require('../models/Review');

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
    .get('/:id', async (req, res, next) => {
        try {
            const reviewer = await Reviewer.findByPk(req.params.id, {
                include: Review,
            });
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
    })
    .delete('/:id', async (req, res, next) => {
        try {
            await Reviewer.destroy({
                where: {id: req.params.id},
            })
            res.send({success: '👻'});
        } catch (err) {
            next(err);
        }
    });

    //write get by id 