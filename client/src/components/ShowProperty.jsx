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

            <div class="property-info-left-top">
              <div>
                <p>{this.state.property.address}</p>
                <h3>${this.state.property.price}</h3>
              </div>
              <div class="property-categories">
                <div>
                  <p id="font">Bedrooms</p>
                  <p>{this.state.property.rooms}</p>
                </div>
                <div>
                  <p id="font">Bathrooms</p>
                  <p>{this.state.property.bathrooms}</p>
                </div>
                <div>
                  <p id="font">Parking Spaces</p>
                  <p>{this.state.property.parking_spaces}</p>
                </div>
              </div>
            </div>

            <div class="property-info-left-middle">
              <p>Est. Monthly Payments: ${((this.state.property.price) * 0.8 / 360).toFixed(0)}</p>
              <Button>Can I Afford This Property?</Button>
            </div>

            <div class="property-info-left-bottom">
              <h3>{this.state.property.name}</h3>
              <h4>Property Description</h4>
              <div id="property-details">
                <p>{this.state.property.details}</p>
              </div>

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