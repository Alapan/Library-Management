import Backbone from 'backbone';

const Base = Backbone.View.extend({
  el: '',

  template() {},

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
  },

  subViews() {},

  render() {
    this.$el.html(this.template);
    const subViews = this.subViews();
    if (subViews) {
      for (let name in subViews) {
        const view = new subViews[name].view(this.session);
        view.setElement = subViews[name].el;
        view.render();
      }
    }
  }
});

export default Base;
