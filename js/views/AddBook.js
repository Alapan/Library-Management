import BaseView from './BaseView';
import BookList from '../collections/BookList';
import PNotify from 'pnotify/dist/es/PNotify.js';

const AddBook = BaseView.extend({

  events: {
    'click #post-book-data': 'postBookData'
  },

  postBookData(e) {
    e.preventDefault();
    const bookList = new BookList();
    const name = this.$('#bookName').val().trim();
    if (name) {
      bookList.fetch({
        data: this.$('#bookForm').serialize(),
        type: 'POST',
        success: () => {
          PNotify.success({
            title: 'Add book',
            text: 'Book added successfully'
          });
        },
        error: () => {
          PNotify.error({
            title: 'Error',
            text: 'Error: Book could not be added'
          })
        }
      });
    }
  },

  render() {
    const el = this.$el;
    $.get('templates/AddBook.html').then(function(data) {
      const template = _.template(data, {});
      el.html(template);
    });
  }
});

export default AddBook;
