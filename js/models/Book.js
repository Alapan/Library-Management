import Backbone from 'backbone';

const Book = Backbone.Model.extend({
  defaults: {
    name: ''
  },

  validate: function(attributes) {
    if (typeof(attributes.firstName) != 'string') {
      return 'First name is mandatory';
    }

    if (typeof(attributes.lastName) != 'string') {
      return 'Last name is mandatory';
    }

    if (typeof(attributes.bookName) != 'string') {
      return 'Please enter a valid book name';
    }
  }
});

export default Book;
