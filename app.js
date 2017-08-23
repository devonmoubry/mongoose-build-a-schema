const mongoose = require('mongoose');
const Movie = require('./models/movie.js');
const Person = require('./models/person.js');
mongoose.Promise = require('bluebird');
// Replace "test" with your database name.
mongoose.connect('mongodb://localhost:27017/mongoose-build-a-schema');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we are connected');
});
