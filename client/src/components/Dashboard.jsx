import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import { Button, Navbar, Table } from 'react-bootstrap';
import TableExample from './TableExample'
import '../stylesheets/dashboard.css';
import CreateProperty from './CreateProperty';
import Profile from './Profile';
import Account from './Account';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: true,
      userProperties: false,
      createProperty: false,
      account: false
    }
  }



  render() {
    return (
      <div class="dashboard">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">

          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Sup Dog <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item" onClick={() => {
                this.setState({
                  userProperties: true,
                  table: false,
                  createProperty: false,
                  account: false
                })
              }}>
                <a class="nav-link" href="#">
                  Your Properties
                </a>
              </li>
              <li class="nav-item" onClick={() => {
                this.setState({
                  userProperties: false,
                  table: false,
                  createProperty: true,
                  account: false
                })
              }}>
                <a class="nav-link" href="#">
                  Create Property
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> */}
                  Contacts
            </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg> */}
                  Integrations
            </a>
              </li>
              <li class="nav-item" onClick={() => {
                this.setState({
                  userProperties: false,
                  table: false,
                  createProperty: false,
                  account: true
                })
              }}>
                <a class="nav-link" href="#">
                  My Profile
                </a>
              </li>
            </ul>

            {/* <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Settings</span>
              <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
              </a>
            </h6> */}
            <ul class="nav flex-column mb-2">
              {/* <li class="nav-item" onClick={() => {
                this.setState({
                  userProperties: false,
                  table: false,
                  createProperty: false,
                  account: true
                })
              }}>
                <a class="nav-link" href="#">
                  My Profile
                </a>
              </li> */}
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Last quarter
            </a>
              </li> */}
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Social engagement
            </a>
              </li> */}
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Year-end sale
            </a>
              </li> */}
            </ul>
          </div>
        </nav>

        {
          this.state.table && <TableExample />
        }
        {
          this.state.createProperty &&
          <CreateProperty
            currentUser={this.props.currentUser}
          />
        }

        {
          this.state.userProperties && <Profile
            currentUser={this.props.currentUser}

          />
        }

        {
          this.state.account && <Account
            currentUser={this.props.currentUser}

          />
        }




      </div>
    )
  }

}
export default withRouter(Dashboard)