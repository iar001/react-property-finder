import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Navbar } from 'react-bootstrap';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div class="dropdown-menu" aria-labelledby="dropdown01">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item-active">
              <Link to="/register" class="nav-link">
                Go to Register
              </Link>
            </li>
            {this.props.currentUser
              ?
              <>
                <div id="login-shape">
                  <div class="nav-link">
                    <p>Hello, {this.props.currentUser.username}</p>
                  </div>
                </div>
                <div class="nav-link">
                  <button
                    id="logout-button"
                    onClick={this.props.handleLogout}>Logout</button>
                </div>
              </>
              :
              <li class="nav-link">
                <Link to="/login" >
                  Go to Login
              </Link>
              </li>
            }

          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button variant="outline-secondary" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }

}
export default withRouter(Homepage)