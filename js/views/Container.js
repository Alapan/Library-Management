import Base from './Base';
import AddBook from './AddBook';
import BookList from './BookList';
import Home from './Home';
import AddUser from './AddUser';
import Header from './Header';

const Container = Base.extend({
  el: '#app',

  template: _.template(`
    <div id='header'></div>
    <div id='content'></div>
  `),

  subViews() {
    return {
      header: {
        el: '#header',
        view: Header
      }
    }
  },

  tabs() {
    return {
      el: '#content',
      tab: {
        home: Home,
        addBook: AddBook,
        list: BookList,
        addUser: AddUser
      }
    }
  }
});

export default Container;
