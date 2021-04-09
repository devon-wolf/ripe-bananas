const { Router } = require('express');
const Actor = require('../models/Actor')

module.exports = Router().post('/', async (req, res, next) => { 
    try {
        const actor = await Actor.create(req.body);
        res.send(actor);
    } catch (err) {
        next(err);
    }
})