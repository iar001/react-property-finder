import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Route, Link, withRouter } from 'react-router-dom';
import { loginUser, registerUser, verifyUser } from './services/api-helper';
import Login from './components/Login';
import Register from './components/Register'
import Header from './components/Header';
import Homepage from './components/Homepage'
import Dashboard from './components/Dashboard'
import EditProperty from './components/EditProperty'
import Profile from './components/Profile'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        location: ""
      }
    }
  }

  async componentDidMount() {
    const currentUser = await verifyUser();
    this.setState({
      currentUser
    })
  }

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({
      currentUser
    })
    this.props.history.push(`/`)
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
    this.props.history.push(`/`)
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
    this.props.history.push('/')
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />

        <Route path="/dashboard" render={() => (
          <Dashboard
            currentUser={this.state.currentUser}
          />
        )}
        />

        <Route exact path="/" render={() => (
          <Homepage
            currentUser={this.state.currentUser}
          />
        )}
        />

        <Route exact path="/editproperty/" render={() => (
          <EditProperty
          />
        )}
        />

        <Route exact path="/profile" render={() => (
          <Profile
            currentUser={this.state.currentUser}
          />
        )}
        />



        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)}
        />

        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData}
          />)}
        />
      </div>
    );
  }
}

export default withRouter(App);
