const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: String,
  author: [{
  	type: Schema.Types.ObjectId,
  	ref: 'Author',
  }],
  isdn: String,
  summary: String
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;