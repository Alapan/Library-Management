const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: String,
  last_name: String,
  date_of_birth: Date
});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;