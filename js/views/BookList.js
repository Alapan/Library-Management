import Base from './Base';
import Books from '../collections/Books';
import Book from './Book';

const BookList = Base.extend({
  initialize(options) {
    this.bookList = new Books();
    this.constructor.__super__.initialize.call(this, options);
  },

  template: _.template(`
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Book</th>
          <th>Author</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="bookList"></tbody>
    </table>`
  ),

  renderCollection() {
    const self = this;
    this.bookList.fetch().done(function() {
      self.bookList.each(function(book) {
        const bookView = new Book({ model: book });
        $('#bookList').append(bookView.render().el);
      });
    });
  },

  render() {
    Base.prototype.render.apply(this, arguments);
    this.renderCollection();
  }
});

export default BookList;
