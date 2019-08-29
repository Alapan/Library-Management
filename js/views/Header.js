import Base from './Base';

const Header = Base.extend({
  template: _.template(`
    <header>
      <h1 class="header">Library management system</h1>
    </header>
  `)
});

export default Header;
