const _ = require('lodash');
import BaseView from './BaseView';
import PNotify from 'pnotify/dist/es/PNotify.js';


const HomeView = BaseView.extend({

  initialize(options) {
    HomeView.__super__.initialize.apply(this, arguments);
    this.parent = options.parent;
  },

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
        console.log('DATA: ', data);
      },
      error: () => {
        PNotify.error({
          title: 'Authentication failed',
          text: 'Username or password is incorrect'
        })
      }
    })

  },

  render() {
    const el = this.$el;
    let template = '';

    if (this.session.user) {
      template = 'home';
    } else {
      template = 'login';
    }

    $.get(`templates/${template}.html`).then(function(data) {
      const template = _.template(data, {});
      el.html(template);
    });
  }
});

export default HomeView;
