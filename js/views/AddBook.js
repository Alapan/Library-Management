import Backbone from 'backbone';
import BookList from '../collections/BookList';

const AddBook = Backbone.View.extend({

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
        type: 'POST'
      });
    }
  },

  render() {
    const el = this.$el;
    $.get('templates/AddBook.html').then(function(data) {
      const template = _.template(data, {});
      el.html(template);
    }, 'html');
  }
});

export default AddBook;