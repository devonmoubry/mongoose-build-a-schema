const mongoose = require('mongoose');
const Person = require('./person.js');

var movieSchema = mongoose.Schema({
    title: String,
    year: Number,
    director: Person,
    stars: [Person]
});

console.log('What is a movieSchema? ', typeof movieSchema, movieSchema);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
