const { Router } = require('express');
const Film = require('../models/Film');
const Actor = require('../models/Actor')

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const film = await Film.create(req.body);
      res.send(film);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const films = await Film.findAll();
      res.send(films);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const films = await Film.findByPk(req.params.id, { include: Actor}) ;
      res.send(films);
    } catch (err) {
      next(err);
    }
  });


