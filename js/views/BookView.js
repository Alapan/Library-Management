import Backbone from 'backbone';

const BookView = Backbone.View.extend({

  tagName: 'tr',

	template: _.template(`
    <td><%= name %></td>
    <td><%= author %></td>
	`),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default BookView;
