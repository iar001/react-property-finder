import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { oneUser, updateUser } from '../services/api-helper';
import '../stylesheets/login.css'


// This component handles our register form
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: [],
      accountForm: {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        location: "",
        password: "",
        profile_photo: ""
      }
    }
  }
  async componentDidMount() {
    const response = await oneUser(parseInt(this.props.currentUser.id))
    this.setState({
      accountForm: {
        firstname: response.firstname,
        lastname: response.lastname,
        email: response.email,
        username: response.username,
        location: response.location,
        password: response.password,
        profile_photo: response.profile_photo

      },
      user: response
    })
  }
  updateUser = async (e) => {
    e.preventDefault()
    const accountForm = this.state.accountForm
    const user = await updateUser(parseInt(this.props.currentUser.id), accountForm)
    this.setState(prevState => ({
      users: [...prevState.users, user],
      accountForm: {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        location: "",
        password: "",
        profile_photo: ""

      }
    }))
    this.props.history.push(`/dashboard`)

  }

  // deleteProperty = async () => {
  //   await destroyProperty(this.props.match.params.userId);
  //   this.setState(prevState => ({
  //     users: prevState.users.filter(user => user.id !== this.props.match.params.userId)
  //   }))
  //   this.props.history.push(`/dashboard`)
  // }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      accountForm: {
        ...prevState.accountForm,
        [name]: value
      }
    }))
  }
  render() {

    return (
      <div className="wrapper">

        <div className="auth-container">
          <h1>Update Account</h1>
          <hr />
          <form
            class="form-signin"
            onSubmit={this.updateUser} >
            <div class="update-account-field">
              <p>First:</p>
              <input
                required=""
                autofocus=""
                class="form-control"
                name="firstname"
                type="text"
                value={this.state.accountForm.firstname}
                placeholder="First Name"
                onChange={this.handleChange} />
            </div>

            <div class="update-account-field">
              <p>Last:</p>
              <input
                required=""
                autofocus=""
                class="form-control"
                name="lastname"
                type="text"
                value={this.state.accountForm.lastname}
                placeholder="Last Name"
                onChange={this.handleChange} />
            </div>

            <div class="update-account-field">
              <p>Username:</p>
              <input
                required=""
                autofocus=""
                class="form-control"
                name="username"
                type="text"
                value={this.state.accountForm.username}
                placeholder="username"
                onChange={this.handleChange} />
            </div>


            <div class="update-account-field">
              <p>Password:</p>
              <input
                required=""
                autofocus=""
                class="form-control"
                name="password"
                type="text"
                value={this.state.accountForm.password}
                placeholder="password"
                onChange={this.handleChange} />
            </div>

            <div class="update-account-field">
              <p>Email:</p>
              <input
                required=""
                autofocus=""
                class="form-control"
                name="email"
                type="text"
                value={this.state.accountForm.email}
                placeholder="email"
                onChange={this.handleChange} />
            </div>

            <div class="update-account-field">
              <p>Location:</p>
              <input
                required=""
                autofocus=""
                class="form-control"
                name="location"
                type="text"
                value={this.state.accountForm.location}
                placeholder="Location"
                onChange={this.handleChange} />
            </div>

            <div class="update-account-field">
              <p>Profile Photo:</p>
              <input
                required=""
                autofocus=""
                class="form-control"
                name="profile_photo"
                type="text"
                value={this.state.accountForm.profile_photo}
                placeholder="Profile Photo"
                onChange={this.handleChange} />
            </div>



            <button
              class="btn btn-lg btn-primary btn-block"
            >
              Update Account
              </button>
          </form>
        </div>
      </div>

    )
  }
}

export default withRouter(Account)