const { Router } = require('express');
const Actor = require('../models/Actor')
const Film = require('../models/Film')

module.exports = Router().post('/', async (req, res, next) => { 
    try {
        const actor = await Actor.create(req.body);
        res.send(actor);
    } catch (err) {
        next(err);
    }
})
.get('/', async (req, res, next) => { 
    try {
        const actor = await Actor.findAll();
        res.send(actor);
    } catch (err) { 
        next(err);
    }
})
.get('/:id', async (req, res, next) => { 
    try { 
        const actor = await Actor.findByPk(req.params.id
            , {
            include: Film [{ 
                id: '1',
                title: 'Iron Man',
                release: '2008-05-02'
            }]
        }
        );
        res.send(actor);
    } catch (err) { 
        next(err);
    }
})
