import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import { oneProperty, oneUser, userProperties } from '../services/api-helper';
import { Button } from 'react-bootstrap';
import '../stylesheets/showproperty.css';


class ShowProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: [],
      agent: [],
      agentProperties: []
    }
  }

  async componentDidMount() {
    const property = await oneProperty(this.props.match.params.propertyId)
    const agent = await oneUser(property.user_id)
    const agentProperties = await userProperties(property.user_id)
    this.setState({
      property,
      agent,
      agentProperties
    })
  }


  refreshPage = (id) => {
    window.location.reload(`/show-property/${id}`);
  }


  render() {
    // const { agent } = this.state.property.data.user
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
                  <i className="fa fa-bed fa-3x"></i>
                  <p>{this.state.property.rooms} Bedrooms</p>
                </div>
                <div>
                  <i className="fa fa-bath fa-3x"></i>
                  <p>{this.state.property.bathrooms} Bathrooms</p>
                </div>
                <div>
                  <i className="fa fa-car fa-3x"></i>
                  <p>{this.state.property.parking_spaces} Parking Spots</p>
                </div>
              </div>
            </div>

            <div class="property-info-left-middle">
              <p>Est. Monthly Payments: ${((this.state.property.price) * 0.8 / 360).toFixed(0)}</p>
              <a
                target="_blank"
                href="https://www.mortgagecalculator.org/">
                <Button>Can I Afford This Property?</Button>
              </a>

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
              <p> {this.state.agent.firstname} {this.state.agent.lastname}</p>
              <img src={this.state.agent.profile_photo} alt="Agent Profile Pic Pending" />
            </div>
            <div>
              <p>Email Agent</p>
              <Button>{this.state.agent.email}</Button>
            </div>
          </div>
        </div>
        {/* <h3>Other Agent Properties</h3>
        <div class="agent-properties">
          {
            this.state.agentProperties.map(property => (
              <React.Fragment key={property.id} >
                <div class="each-property">
                  <Link
                    to={`/`}
                  >
                    <img src={property.photo} />
                  </Link>
                  <div id="amenities">
                    <div id="each-amenity">
                      <i className="fa fa-bed text-muted"></i>
                      <p className="text-muted">{property.rooms}</p>
                    </div>
                    <div id="each-amenity">
                      <i className="fa fa-bath text-muted"></i>
                      <p className="text-muted">{property.bathrooms}</p>
                    </div>
                    <div id="each-amenity">
                      <i className="fa fa-car text-muted"></i>
                      <p className="text-muted">{property.parking_spaces}</p>
                    </div>
                  </div>
                  <Link to={`/show-property/${property.id}`} >
                    <h4>{property.id}</h4>
                    <h3>{property.name}</h3>
                  </Link>
                </div>
              </React.Fragment>

            ))
          }
        </div> */}
      </div>
    )
  }
}

export default withRouter(ShowProperty)