import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import { oneProperty } from '../services/api-helper';
import { Button } from 'react-bootstrap';
import '../stylesheets/showproperty.css';

class ShowProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: []

    }
  }

  async componentDidMount() {
    const property = await oneProperty(this.props.match.params.propertyId)
    this.setState({
      property
    })
  }

  render() {
    return (
      <div class="show-property">
        <img src={this.state.property.photo}></img>
        <div class="property-info">
          <div class="property-info-left">
            <div>
              <p>Address: {this.state.property.address}</p>
              <p>For Sale</p>
            </div>
            <div>
              <div>
                <p>Rooms: {this.state.property.rooms}</p>
              </div>
              <div>
                <p>Bathrooms: {this.state.property.bathrooms}</p>
              </div>
              <div>
                <p>Parking Spaces</p>
              </div>
              <h3>Name: {this.state.property.name}</h3>
              <p>Price: ${this.state.property.price}</p>
            </div>
          </div>
          <div class="property-info-right">
            <div>
              <h3>Agent Information</h3>
              <p>Test Company</p>
            </div>
            <div>
              <Button>Call</Button>
              <Button>Email for More Details</Button>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default withRouter(ShowProperty)