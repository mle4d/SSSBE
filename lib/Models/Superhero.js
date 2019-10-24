const mongoose = require ('mongoose');

const SuperheroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sound: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Superhero', SuperheroSchema);