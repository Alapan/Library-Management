import Backbone from 'backbone';
import MainView from './views/main';

app.router = Backbone.Router.extend({
  routes: {
    '': 'home',
  	'add': 'addBook',
  	'view': 'viewBooks'
  },

  initialize() {
    this.view = new MainView();
  },

  home() {
    this.view.showTab('home');
  },

  addBook() {
    this.view.showTab('add');
  },

  viewBooks() {
  	this.view.showTab('list');
  }
});

export default app.router;
