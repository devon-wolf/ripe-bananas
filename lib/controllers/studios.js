const {Router} = require('express');
const Studio = require('../models/Studio');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const studio = await Studio.create(req.body);
    res.send(studio);
  } catch (err) {
    next(err);
  }
})
  .get('/', async (req, res, next) => {
    try {
      const studio = await Studio.findAll();
      res.send(studio);
    } catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const studio = await Studio.findByPk(req.params.id);
      res.send(studio);
    } catch (err) {
      next(err);
    }
  });