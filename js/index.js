const app = {};

app.BookView = Backbone.View.extend({
  tagName: 'li',

  template: _.template('<%= title %>'),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
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


app.AppView = Backbone.View.extend({
  el: '#app',

  initialize: function () {
    this.input = this.$('#book-name');
    app.bookList = new app.BookList();
    app.bookList.on('add', this.addOneBook, this);
    app.bookList.fetch();
  },

  events: {
    'keypress #book-name': 'createNewBookModel'
  },

  addOneBook: function (book) {
    const b = new app.BookView({ model: book });
    this.$('#bookList').append(b.render().el);
  },

  createNewBookModel: function (e) {
  	if (e.which === 13) {
      e.preventDefault();
      title = this.input.val().trim();
      app.bookList.create({ title });
      this.input.val('');
  	}
  }

});


app.appView = new app.AppView();



