import Base from './Base';

const Login = Base.extend({

  template: _.template(`
    <form class="login-form">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="form-control"
          placeholder="Type email"/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          class="form-control"
          placeholder="Enter password" />
      </div>
      <button
        type="submit"
        class="btn btn-success login-submit">
        Log in
      </button>
    </form>
  `)
});

export default Login;