import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import { createProperty } from '../services/api-helper';
import { Button } from 'react-bootstrap'
import '../stylesheets/login.css'



class CreateProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      propertyForm: {
        name: "",
        address: "",
        price: 0,
        rooms: 0,
        bathrooms: 0,
        parking_spaces: 0,
        for_sale: true,
        details: "",
        photo: ""
      }
    }
  }

  newProperty = async (e) => {
    e.preventDefault();
    const property = await createProperty(this.state.propertyForm);
    this.setState(prevState => ({
      properties: [...prevState.properties, property],
      propertyForm: {
        name: "",
        address: "",
        price: "",
        rooms: "",
        bathrooms: "",
        parking_spaces: 0,
        for_sale: true,
        details: "",
        photo: ""
      }
    }))
    this.props.history.push(`/dashboard`)

  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      propertyForm: {
        ...prevState.propertyForm,
        [name]: value
      }
    }))
  }

  render() {


    return (
      <div className="wrapper">

        <div className="auth-container">
          <h1>Add Property</h1>
          <hr />
          <form
            class="form-signin"
            onSubmit={this.newProperty} >
            <div id="create-field">
              {/* <p>Property Name:</p> */}
              <input
                required=""
                autofocus=""
                class="form-control"
                name="name"
                type="text"
                value={this.state.propertyForm.name}
                placeholder="Property Name"
                onChange={this.handleChange} />
            </div>

            {/* <p>Address:</p> */}
            <input
              required=""
              autofocus=""
              class="form-control"
              name="address"
              type="text"
              value={this.state.propertyForm.address}
              placeholder="Address"
              onChange={this.handleChange} />

            {/* <p>Price:</p> */}
            <input
              required=""
              autofocus=""
              class="form-control"
              name="price"
              type="text"
              value={parseInt(this.state.propertyForm).price}
              placeholder="Price"
              onChange={this.handleChange} />

            {/* <p>Rooms:</p> */}
            <input
              required=""
              autofocus=""
              class="form-control"
              name="rooms"
              type="text"
              value={parseInt(this.state.propertyForm).rooms}
              placeholder="Bedrooms"
              onChange={this.handleChange} />

            {/* <p>Bathrooms:</p> */}
            <input
              required=""
              autofocus=""
              class="form-control"
              name="bathrooms"
              type="text"
              value={parseInt(this.state.propertyForm).bathrooms}
              placeholder="Bathrooms"
              onChange={this.handleChange} />

            {/* <p>Parking Spaces:</p> */}
            <input
              required=""
              autofocus=""
              class="form-control"
              name="parking_spaces"
              type="text"
              value={parseInt(this.state.propertyForm).parking_spaces}
              placeholder="Parking Spaces"
              onChange={this.handleChange} />

            <p>For Sale?:</p>
            <select
              value={this.state.propertyForm.for_sale}
              onChange={this.handleChange}
              name="for_sale"
            >
              <option value={true}>Sale</option>
              <option value={false}>Rent</option>
            </select>
            {/* <input
              name="for_sale"
              type="text"
              value={parseInt(this.state.propertyForm).for_sale}
              placeholder="True"
              onChange={this.handleChange} /> */}

            {/* <p>Description:</p> */}
            <input
              required=""
              autofocus=""
              class="form-control"
              name="details"
              type="text"
              value={this.state.propertyForm.details}
              placeholder="Description"
              onChange={this.handleChange} />

            {/* <p>Photo:</p> */}
            <input
              required=""
              autofocus=""
              class="form-control"
              name="photo"
              type="text"
              value={this.state.propertyForm.photo}
              placeholder="Photo"
              onChange={this.handleChange} />


            <button
              class="btn btn-lg btn-primary btn-block"
            >
              Create Property
              </button>
          </form>
        </div>
      </div>

    );
  }
}

export default withRouter(CreateProperty)