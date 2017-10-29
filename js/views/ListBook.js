import Backbone from 'backbone';
import BookList from '../collections/BookList';
import Book from '../models/Book';
import BookView from './BookView';

const ListBook = Backbone.View.extend({
  initialize() {
    this.bookList = new BookList();
  },

  render() {
    const el = this.$el;
    const self = this;

    this.bookList.fetch().done(function() {
      $.get('templates/BookList.html').then((data) => {
        const template = _.template(data, {});
        el.html(template);

        self.bookList.each(function(book) {
          const bookView = new BookView({ model: book });
          $('#bookList').append(bookView.render().el);
        });
      });
    });
  }
});

export default ListBook;
