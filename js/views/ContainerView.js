import BaseView from './BaseView';
import AddBook from './AddBook';
import ListBook from './ListBook';
import HomeView from './HomeView';

const ContainerView = BaseView.extend({
  el: '#app',

  tabs() {
    return {
      el: '#content',
      tab: {
        home: HomeView,
        add: AddBook,
        list: ListBook
      }
    }
  },

  render() {
    $.get('templates/Header.html').then(function(data) {
      const template = _.template(data, {});
      $('#header').html(template);
    });
  }
});

export default ContainerView;
