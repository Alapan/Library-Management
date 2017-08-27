import Backbone from 'backbone';
import MainView from './views/main';

const Router = Backbone.Router.extend({
  routes: {
  	'': 'home'
  },

  home() {
  	new MainView();
  }
});

export default Router;
