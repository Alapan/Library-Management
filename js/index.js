const app = {};

app.BookView = Backbone.View.extend({
  tagName: 'li',

  template: _.template($('#app').html()),

  render: () => {
    this.template(this.$el.html(this.model.toJSON()));
    return this;
  }
});

app.Book = Backbone.Model.extend({
  defaults: {
  	title: ''
  }
});

app.book = new app.Book();
app.BookList = Backbone.Collection.extend({
  model: app.Book,
  // For temp use, to be replaced with URL
  localStorage: new Backbone.LocalStorage('BookList')
});

app.bookList = new app.BookList();


app.AppView = Backbone.View.extend({
  el: '#app',

  initialize: () => {
    this.input = this.$('#book-name');
    app.bookList.on('change', this.addOneBook, this);
    app.bookList.fetch();
  },

  events: {
    'keypress #book-name': 'createNewBookModel'
  },

  addOneBook: (book) => {
    console.log('BOOK: ', book);
    const b = new app.BookView({ model: book });
    this.$('#bookList').append(b.render().el());
  },

  createNewBookModel: (e) => {
  	if (e.which === 13) {
  		e.preventDefault();
  		app.bookList.create({ title: this.input.val().trim() });
      this.input.val('');
  	}
  }

});


app.appView = new app.AppView();



