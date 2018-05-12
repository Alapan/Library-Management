import BaseView from './BaseView';

const HomeView = BaseView.extend({

  render() {
    const el = this.$el;
    $.get('templates/Home.html').then(function(data) {
      const template = _.template(data, {});
      el.html(template);
    });
  }
});

export default HomeView;
