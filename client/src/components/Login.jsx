import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../stylesheets/login.css'

// This component handles our login form and has a link to the register form
const Login = (props) => {

  return (
    <div className="wrapper">


      <div>
        <h1>Please Sign In</h1>
        <hr />
        <form
          class="form-signin"
          onSubmit={(e) => {
            e.preventDefault();
            props.handleLogin();
          }} >
          <input
            required=""
            autofocus=""
            class="form-control"
            name="username"
            type="text"
            value={props.formData.username}
            placeholder="username"
            onChange={props.handleChange} />
          <input
            required=""
            autofocus=""
            class="form-control"
            name="password"
            type="password"
            value={props.formData.password}
            placeholder="password"
            onChange={props.handleChange} />
          <hr />
          <button
            class="btn btn-lg btn-primary btn-block"
            type="submit"
          >
            Login
            </button>
          <Link to="/register">
            <button
              class="btn btn-lg btn-primary btn-block"
            >Go to Register</button>
          </Link>
        </form>
      </div>

      {/* <div>
        <form class="form-signin">
          <img class="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
          <div class="checkbox mb-3">

          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
        </form>
      </div> */}

    </div>
  );
}

export default withRouter(Login);

