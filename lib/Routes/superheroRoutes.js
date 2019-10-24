const { Router } = require('express');
const Superhero = require('../Models/Superhero.js');

module.exports = Router()

  .post('/', (req, res, next) => {

    const {
      name, 
      sound,
      image
    } = req.body;

    Superheros 
      .create({ name, sound, image })
      .then(hero => res.send(hero))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    Superheros
      .find()
      .then(heros => res.send(heros))
      .catch(next);
  });