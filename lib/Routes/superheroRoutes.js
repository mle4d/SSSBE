const { Router } = require('express');
const Superhero = require('../Models/Superhero');

module.exports = Router()

  .post('/', (req, res, next) => {

    const {
      name, 
      sound,
      image
    } = req.body;

    Superhero 
      .create({ name, sound, image })
      .then(hero => res.send(hero))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    Superhero
      .find()
      .then(heros => res.send(heros))
      .catch(next);
  });
