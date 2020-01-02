import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import { createProperty } from '../services/api-helper';
import { Button } from 'react-bootstrap'
import '../stylesheets/createproperty.css'


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
          <form onSubmit={this.newProperty} >
            <p>Property Name:</p>
            <input
              name="name"
              type="text"
              value={this.state.propertyForm.name}
              placeholder="Property Name"
              onChange={this.handleChange} />

            <p>Address:</p>
            <input
              name="address"
              type="text"
              value={this.state.propertyForm.address}
              placeholder="Address"
              onChange={this.handleChange} />

            <p>Price:</p>
            <input
              name="price"
              type="text"
              value={parseInt(this.state.propertyForm).price}
              placeholder="Price"
              onChange={this.handleChange} />

            <p>Rooms:</p>
            <input
              name="rooms"
              type="text"
              value={parseInt(this.state.propertyForm).rooms}
              placeholder="Bedrooms"
              onChange={this.handleChange} />

            <p>Bathrooms:</p>
            <input
              name="bathrooms"
              type="text"
              value={parseInt(this.state.propertyForm).bathrooms}
              placeholder="Bathrooms"
              onChange={this.handleChange} />

            <p>Parking Spaces:</p>
            <input
              name="parking_spaces"
              type="text"
              value={parseInt(this.state.propertyForm).parking_spaces}
              placeholder="Parking Spaces"
              onChange={this.handleChange} />

            <p>Description:</p>
            <input
              name="details"
              type="text"
              value={this.state.propertyForm.details}
              placeholder="Description"
              onChange={this.handleChange} />

            <p>Photo:</p>
            <input
              name="photo"
              type="text"
              value={this.state.propertyForm.photo}
              placeholder="Photo"
              onChange={this.handleChange} />


            <button variant="outline-primary">Create Property</button>
          </form>
        </div>
      </div>

    );
  }
}

export default withRouter(CreateProperty)