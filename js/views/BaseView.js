import Backbone from 'backbone';

const BaseView = Backbone.View.extend({
  el: '',

  initialize(options) {
    this.session = options;
    this.render();
  },

  // Extend in subclass
  tabs() {},

  showTab(name) {
    const tabs = this.tabs();
    const view = tabs.tab[name];
    this.childView = new view(this.session);
    this.childView.setElement($(tabs.el));
    this.childView.render();
  }
});

export default BaseView;
