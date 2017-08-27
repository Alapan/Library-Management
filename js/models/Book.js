import Backbone from 'backbone';

const Book = Backbone.Model.extend({
  defaults: {
    name: ''
  }
});

export default Book;
