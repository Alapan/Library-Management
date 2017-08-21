const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookCopySchema = new Schema({
  book: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }],
  status: String,
  due_date: Date
});

const BookCopy = mongoose.model('BookCopy', BookCopySchema);

module.exports = BookCopy;