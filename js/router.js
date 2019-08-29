import Backbone from 'backbone';
import AddBook from './views/AddBook';
import Home from './views/Home';
import Container from './views/Container';

app.router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'add': 'addBook',
    'view': 'viewBooks',
    'user': 'addUser'
  },

  initialize() {
    this.session = {};
    this.main = new Container(this.session);
  },

  home() {
    this.main.showTab('home');
  },

  addBook() {
    this.main.showTab('addBook');
  },

  viewBooks() {
    this.main.showTab('list');
  },

  addUser() {
    this.main.showTab('addUser');
  }
});

export default app.router;
