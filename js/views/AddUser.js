import BaseView from './BaseView';
import PNotify from 'pnotify/dist/es/PNotify.js';
import {getFieldsFromString} from '../utils';

const AddUser = BaseView.extend({

  events: {
    'click #userSubmit': 'submitUser'
  },

  submitUser: (e) => {
    e.preventDefault();
    const formData = $('#addUserForm').serialize();
    const {
      password,
      confirmPassword
    } = getFieldsFromString(formData);

    if (password != confirmPassword) {
      PNotify.error({
        title: 'Password mismatch',
        text: 'The passwords do not match!'
      });
    } else {
      $.post('/addUser', formData, function (data) {
        if (data.email) {
          PNotify.success({
            title: 'Add user confirmation',
            text: 'User added successfully!'
          });
          $('#addUserForm')[0].reset();
        }
      });
    }
  },

  render() {
    const el = this.$el;
    $.get('templates/AddUser.html').then(function(data) {
      const template = _.template(data, {});
      el.html(template);
    });
  }
});

export default AddUser;
