import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>

        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a class="navbar-brand" href="#">Property Finder</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/" class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
              </li>
              {this.props.currentUser
                ?
                <>

                  <div class="nav-item">
                    <Link to="/dashboard" class="nav-link">
                      Dashboard
                      </Link>
                  </div>
                </>
                :
                <li class="nav-item">
                  <Link to="/login" class="nav-link">
                    Users Only
                  </Link>
                </li>
              }

              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Advertising</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Search</a>
                <div class="dropdown-menu" aria-labelledby="dropdown01">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              {/* <li class="nav-item-active">
                <Link to="/register" class="nav-link">
                  Go to Register
              </Link>
              </li> */}
              {this.props.currentUser
                ?
                <>

                  {/* <div class="nav-item">
                    <Link to="/dashboard" class="nav-link">
                      Dashboard
                      </Link>
                  </div> */}
                </>
                :
                <li class="nav-item">
                  <Link to="/register" class="nav-link">
                    Go to Register
              </Link>
                </li>
              }
              {this.props.currentUser
                ?
                <>

                  <div class="nav-link">
                    <Link to="/profile/:userid">
                      <li>Hello, {this.props.currentUser.username}</li>
                    </Link>
                  </div>

                  <div class="nav-link">
                    <li
                      onClick={this.props.handleLogout}>
                      Logout
                  </li>
                  </div>
                </>
                :
                <li class="nav-item">
                  <Link to="/login" class="nav-link">
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

      </div>

    )
  }

}
export default withRouter(Header)