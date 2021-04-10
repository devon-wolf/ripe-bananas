const { Router } = require('express');
const Film = require('../models/Film');

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
  });
