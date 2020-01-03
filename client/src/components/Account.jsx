import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { oneUser, updateUser } from '../services/api-helper';
 

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
          <form onSubmit={this.updateUser} >
            <p>First Name:</p>
            <input
              name="firstname"
              type="text"
              value={this.state.accountForm.firstname}
              placeholder="First Name"
              onChange={this.handleChange} />

            <p>Last Name:</p>
            <input
              name="lastname"
              type="text"
              value={this.state.accountForm.lastname}
              placeholder="Last Name"
              onChange={this.handleChange} />

            <p>Username:</p>
            <input
              name="Username"
              type="text"
              value={this.state.accountForm.username}
              placeholder="username"
              onChange={this.handleChange} />

            <p>Password:</p>
            <input
              name="password"
              type="password"
              value={this.state.accountForm.password}
              placeholder="password"
              onChange={this.handleChange} />

            <p>Email:</p>
            <input
              name="Email"
              type="text"
              value={this.state.accountForm.email}
              placeholder="email"
              onChange={this.handleChange} />

            <p>Location:</p>
            <input
              name="location"
              type="text"
              value={this.state.accountForm.location}
              placeholder="Location"
              onChange={this.handleChange} />
            
            <p>Profile Photo:</p>
            <input
              name="profile_photo"
              type="text"
              value={this.state.accountForm.profile_photo}
              placeholder="Profile Photo"
              onChange={this.handleChange} />


            <button variant="outline-primary">Update Account</button>
          </form>
        </div>
      </div>

    )
  }
}

export default withRouter(Account)