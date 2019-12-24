import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import { updateProperty, destroyProperty } from '../services/api-helper';

class EditProperty extends Component {
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
        photo: ""
      },
      property: []
    }
  }

  updateProperty = async (e) => {
    e.preventDefault()
    const propertyForm = this.state.propertyForm
    const property = await updateProperty(this.props.match.params.propertyId, propertyForm)
    this.setState(prevState => ({
      properties: [...prevState.properties, property],
      propertyForm: {
        name: "",
        address: "",
        price: 0,
        rooms: 0,
        bathrooms: 0,
        photo: ""
      }
    }))
  }

  deleteProperty = async () => {
    await destroyProperty(this.props.match.params.propertyId);
    this.setState(prevState => ({
      properties: prevState.properties.filter(property => property.id !== this.props.match.params.propertyId)
    }))
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
          <h1>Update Property</h1>
          <hr />
          <form onSubmit={this.updateProperty} >
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
              placeholder="address"
              onChange={this.handleChange} />

            <p>Price:</p>
            <input
              name="price"
              type="text"
              value={parseInt(this.state.propertyForm).price}
              placeholder="price"
              onChange={this.handleChange} />

            <p>Rooms:</p>
            <input
              name="rooms"
              type="text"
              value={parseInt(this.state.propertyForm).rooms}
              placeholder="rooms"
              onChange={this.handleChange} />

            <p>Bathrooms:</p>
            <input
              name="bathrooms"
              type="text"
              value={parseInt(this.state.propertyForm).bathrooms}
              placeholder="bathrooms"
              onChange={this.handleChange} />

            <p>Photo:</p>
            <input
              name="photo"
              type="text"
              value={this.state.propertyForm.photo}
              placeholder="Photo"
              onChange={this.handleChange} />


            <button>Update Property</button>
          </form>
        </div>
      </div>

    );
  }
}

export default withRouter(EditProperty)