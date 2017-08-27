import Backbone from 'backbone';
import BookList from '../collections/BookList';
import Book from './Book';

const MainView = Backbone.View.extend({
  el: '#app',

  initialize: function () {
    this.bookList = new BookList();
    this.bookList.on('add', this.addOneBook, this);
    this.bookList.fetch();
  },

  events: {
    'submit #bookForm': 'createNewBookModel'
  },

  addOneBook: function (book) {
    const b = new Book({ model: book });
    this.$('#bookList').append(b.render().el);
  },

  createNewBookModel: function (e) {
    e.preventDefault();
    name = this.$('#bookName').val().trim();

    if (name) {
      this.bookList.fetch({
        data: this.$('#bookForm').serialize(),
        type: 'POST'
      });
    }

  }
});

export default MainView;


