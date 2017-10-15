import Backbone from 'backbone';
import AddBook from './AddBook';
import ListBook from './ListBook';
import HomeView from './HomeView';

const MainView = Backbone.View.extend({
  el: '#app',

  initialize() {
    this.render();
  },

  tabs: {
    home: HomeView,
    add: AddBook,
    list: ListBook
  },

  showTab(tab) {
    const view = this.tabs[tab];
    this.childView = new view();
    this.childView.setElement($('#content'));
    this.childView.render();
  },

  render() {
    $.get('templates/Header.html').then(function(data) {
      const template = _.template(data, {});
      $('#header').html(template);
    });
  }
});

export default MainView;
