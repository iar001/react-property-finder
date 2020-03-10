import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { showProperties } from '../services/api-helper'
import '../stylesheets/homepage.css';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: []
    }
  }

  async componentDidMount() {
    const properties = await showProperties()
    this.setState({
      properties
    })
  }

  render() {
    return (
      <div role="main">

        {/* <!-- Main jumbotron for a primary marketing message or call to action --> */}
        <div class="jumbotron">
          <div class="container">
            <h1 class="display-3">Search for your new home today!</h1>
            {/* <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p> */}
            {/* <p><a class="btn btn-primary btn-lg" href="#homepage-images" role="button">Learn more »</a></p> */}
          </div>
        </div>

        <h3>Properties</h3>
        <div class="homepage-images">
          {
            this.state.properties.map(property => (
              <React.Fragment key={property.id} >
                <div class="each-property">
                  <Link
                    to={`/show-property/${property.id}`}
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
                  <h4>{property.name}</h4>
                </div>
              </React.Fragment>

            ))
          }
        </div>

      </div>

    )
  }

}
export default withRouter(Homepage)