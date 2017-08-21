const app = {};

app.BookView = Backbone.View.extend({
  tagName: 'li',

  template: _.template('<%= name %>'),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

app.Book = Backbone.Model.extend({
  defaults: {
    name: ''
  }
});

app.book = new app.Book();
app.BookList = Backbone.Collection.extend({
  model: app.Book,
  url: '/books'
});

app.AppView = Backbone.View.extend({
  el: '#app',

  initialize: function () {
    app.bookList = new app.BookList();
    app.bookList.on('add', this.addOneBook, this);
    app.bookList.fetch();
  },

  events: {
    'submit #bookForm': 'createNewBookModel'
  },

  addOneBook: function (book) {
    const b = new app.BookView({ model: book });
    this.$('#bookList').append(b.render().el);
  },

  createNewBookModel: function (e) {
    e.preventDefault();
    name = this.$('#bookName').val().trim();

    if (name) {
      app.bookList.fetch({
        data: this.$('#bookForm').serialize(),
        type: 'POST'
      });
    }

  }

});

app.appView = new app.AppView();

