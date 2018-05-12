import BaseView from './BaseView';
import BookList from '../collections/BookList';
import Book from '../models/Book';
import BookView from './BookView';

const ListBook = BaseView.extend({
  initialize(options) {
    this.bookList = new BookList();
    this.constructor.__super__.initialize.call(this, options);
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
