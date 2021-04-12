const { Router } = require('express');
// const Film_Actor = require('../models/Film_Actor');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const role = await Film_Actor.create(req.body);
      res.send(role);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const roles = await Film_Actor.findAll();
      res.send(roles);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const role = await Film_Actor.findByPk(req.params.id);
      res.send(role);
    } catch (err) {
      next(err);
    }
  });
