const _ = require('lodash');
import Base from './Base';
import BookList from './BookList';
import Login from './Login';
import Menu from './Menu';
import PNotify from 'pnotify/dist/es/PNotify.js';

const Home = Base.extend({

  initialize(options) {
    Base.prototype.initialize.apply(this, arguments);
    this.parent = options.parent;
  },

  template: _.template(`
    <div id='menu'></div>
    <div id='home'></div>
  `),

  events: {
    'click .login-submit': 'submitLogin'
  },

  submitLogin(e) {
    e.preventDefault();
    const formData = {}
    $('form').serializeArray().map((field) => {
      return formData[field.name] = field.value;
    });

    $.ajax({
      url: '/login',
      type: 'POST',
      data: formData,
      success: (data) => {
        this.session.user = data;
        this.render();
      },
      error: () => {
        PNotify.error({
          title: 'Authentication failed',
          text: 'Username or password is incorrect'
        })
      }
    });
  },

  subViews() {
    return {
      menu: {
        el: '#menu',
        view: Menu
      }
    }
  },

  tabs() {
    return {
      el: '#home',
      tab: {
        bookList: BookList,
        login: Login
      }
    }
  },

  render() {
    Base.prototype.render.apply(this, arguments);
    if (this.session.user) {
      Base.prototype.showTab.call(this, 'bookList');
    } else {
      Base.prototype.showTab.call(this, 'login');
    }
  }
});

export default Home;
