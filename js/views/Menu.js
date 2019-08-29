import Base from './Base';

const Menu = Base.extend({

  template: _.template(`
    <% if (this.session) { %>
      <ul class="mainmenu">
        <li>
          <a href="#/view">View list of books</a>
        </li>
        <li>
          <a href="#/add">Add book</a>
        </li>
        <li>
          <a href="#/user">Add user</a>
        </li>
      </ul>
    <% } %>
  `),

  render() {
    this.user = this.session.user;
    Base.prototype.render.apply(this, arguments);
  }
});

export default Menu;
