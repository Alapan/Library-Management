import Backbone from 'backbone';

const BookView = Backbone.View.extend({

  tagName: 'tr',

  initialize: function() {
    this.listenTo(this.model, 'remove', this.removeView);
  },

  template: _.template(`
    <td><%= name %></td>
    <td>
      <% if (author) { %>
        <%= author.first_name %> <%= author.last_name %>
      <% } %>
    </td>
    <td>
      <button class="btn btn-sm btn-danger delete-btn">
        Delete
      </button>
    </td>
  `),

  events: {
    'click .delete-btn': 'deleteBook'
  },

  deleteBook: function(e) {
    e.preventDefault();
    this.model.destroy();
  },

  removeView: function() {
    this.remove();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default BookView;
