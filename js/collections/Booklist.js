import Book from '../models/Book';
import Backbone from 'backbone';

const BookList = Backbone.Collection.extend({
  model: Book,
  url: '/books'
});

export default BookList;
