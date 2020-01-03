import React from 'react';
import { Button } from 'react-bootstrap'
import '../stylesheets/login.css'


// This component handles our register form


const Register = (props) => {

  return (
    <div className="wrapper">

      <div>
        <h1>Register</h1>
        <hr />
        <form
          class="form-signin"
          onSubmit={props.handleRegister} >
          {/* <p>First Name:</p> */}
          <input
            required=""
            autofocus=""
            class="form-control"
            name="firstname"
            type="text"
            value={props.formData.firstname}
            placeholder="First Name"
            onChange={props.handleChange} />

          {/* <p>Last Name:</p> */}
          <input
            required=""
            autofocus=""
            class="form-control"
            name="lastname"
            type="text"
            value={props.formData.lastname}
            placeholder="Last Name"
            onChange={props.handleChange} />

          {/* <p>Username:</p> */}
          <input
            required=""
            autofocus=""
            class="form-control"
            name="username"
            type="text"
            value={props.formData.username}
            placeholder="username"
            onChange={props.handleChange} />

          {/* <p>Password:</p> */}
          <input
            required=""
            autofocus=""
            class="form-control"
            name="password"
            type="password"
            value={props.formData.password}
            placeholder="password"
            onChange={props.handleChange} />

          {/* <p>Email:</p> */}
          <input
            required=""
            autofocus=""
            class="form-control"
            name="email"
            type="text"
            value={props.formData.email}
            placeholder="email"
            onChange={props.handleChange} />

          {/* <p>Location:</p> */}
          <input
            required=""
            autofocus=""
            class="form-control"
            name="location"
            type="text"
            value={props.formData.location}
            placeholder="Location"
            onChange={props.handleChange} />

          {/* <p>Profile Photo:</p> */}
          <input
            required=""
            autofocus=""
            class="form-control"
            name="profile_photo"
            type="text"
            value={props.formData.profile_photo}
            placeholder="Profile Photo"
            onChange={props.handleChange} />


          <button
            class="btn btn-lg btn-primary btn-block"
            >
            Register
            </button>
        </form>
      </div>
    </div>

  );
}

export default Register;