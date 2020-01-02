import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import { updateProperty, destroyProperty, oneProperty, userProperties } from '../services/api-helper';

class EditProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      property: [],
      propertyForm: {
        name: "",
        address: "",
        price: null,
        rooms: 0,
        bathrooms: 0,
        parking_spaces: 0,
        details: "",
        photo: ""
      }
    }
  }
  async componentDidMount() {
    const response = await oneProperty(parseInt(this.props.match.params.propertyId))
    // const properties = await userProperties(this.props.currentUser.id)
    this.setState({
      propertyForm: {
        name: response.name,
        address: response.address,
        price: response.price,
        rooms: response.rooms,
        bathrooms: response.bathrooms,
        parking_spaces: response.parking_spaces,
        details: response.details,
        photo: response.photo
      },
      property: response,
    })
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
        parking_spaces: 0,
        details: "",
        photo: ""
      }
    }))
    this.props.history.push(`/dashboard`)

  }

  deleteProperty = async () => {
    await destroyProperty(this.props.match.params.propertyId);
    this.setState(prevState => ({
      properties: prevState.properties.filter(property => property.id !== this.props.match.params.propertyId)
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
              value={parseInt(this.state.propertyForm.price)}
              placeholder="price"
              onChange={this.handleChange} />

            <p>Rooms:</p>
            <input
              name="rooms"
              type="text"
              value={parseInt(this.state.propertyForm.rooms)}
              placeholder="Bedrooms"
              onChange={this.handleChange} />

            <p>Bathrooms:</p>
            <input
              name="bathrooms"
              type="text"
              value={parseInt(this.state.propertyForm.bathrooms)}
              placeholder="bathrooms"
              onChange={this.handleChange} />

            <p>Parking Spaces:</p>
            <input
              name="parking_spaces"
              type="text"
              value={parseInt(this.state.propertyForm.parking_spaces)}
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

            <button>Update Property</button>
          </form>

          <button onClick={this.deleteProperty}>
            Delete Property
          </button>
        </div>
      </div>

    );
  }
}

export default withRouter(EditProperty)