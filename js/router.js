import Backbone from 'backbone';
import AddBook from './views/AddBook';
import ListBook from './views/ListBook';
import HomeView from './views/HomeView';
import ContainerView from './views/ContainerView';

app.router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'add': 'addBook',
    'view': 'viewBooks'
  },

  initialize() {
    this.session = {};
    this.main = new ContainerView(this.session);
  },

  home() {
    this.main.showTab('home');
  },

  addBook() {
    this.main.showTab('add');
  },

  viewBooks() {
    this.main.showTab('list');
  }
});

export default app.router;
