import Backbone from 'backbone';
import $ from 'jquery';
import Router from './router';

$(function() {
  new Router();
  Backbone.history.start();
});
