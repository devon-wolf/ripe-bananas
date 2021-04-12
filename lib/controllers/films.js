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
  })

  .get('/:id', async (req, res, next) => {
    try {
      const films = await Film.findByPk(req.params.id);
      res.send(films);
    } catch (err) {
      next(err);
    }
  });

  //once associations are working ~this will pull in actor/role info:
  // .get('/:id', async (req, res, next) => {
  //   try {
  //     const films = await Film.findByPk(req.params.id, { include: Film_Actor});
  //     res.send(films);
  //   } catch (err) {
  //     next(err);
  //   }
  // });

