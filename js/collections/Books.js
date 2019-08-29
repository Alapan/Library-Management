import Book from '../models/Book';
import Backbone from 'backbone';

const Books = Backbone.Collection.extend({
  model: Book,
  url: '/books'
});

export default Books;
