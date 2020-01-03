import React from 'react';
import { Button } from 'react-bootstrap'

// This component handles our register form
const Register = (props) => {

  return (
    <div className="wrapper">

      <div className="auth-container">
        <h1>Register</h1>
        <hr />
        <form onSubmit={props.handleRegister} >
          <p>First Name:</p>
          <input
            name="First Name"
            type="text"
            value={props.formData.firstname}
            placeholder="First Name"
            onChange={props.handleChange} />

          <p>Last Name:</p>
          <input
            name="Last Name"
            type="text"
            value={props.formData.lastname}
            placeholder="Last Name"
            onChange={props.handleChange} />

          <p>Username:</p>
          <input
            name="Username"
            type="text"
            value={props.formData.username}
            placeholder="username"
            onChange={props.handleChange} />

          <p>Password:</p>
          <input
            name="password"
            type="password"
            value={props.formData.password}
            placeholder="password"
            onChange={props.handleChange} />

          <p>Email:</p>
          <input
            name="Email"
            type="text"
            value={props.formData.email}
            placeholder="email"
            onChange={props.handleChange} />

          <p>Location:</p>
          <input
            name="location"
            type="text"
            value={props.formData.location}
            placeholder="Location"
            onChange={props.handleChange} />

            <p>Profile Photo:</p>
          <input
            name="profile_photo"
            type="text"
            value={props.formData.profile_photo}
            placeholder="Profile Photo"
            onChange={props.handleChange} />


          <Button variant="outline-primary">Register</Button>
        </form>
      </div>
    </div>

  );
}

export default Register;