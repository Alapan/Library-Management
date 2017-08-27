import Backbone from 'backbone';

const Book = Backbone.View.extend({
  tagName: 'li',

  template: _.template('<%= name %>'),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default Book;
