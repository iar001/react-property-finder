import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
// import { Button, Navbar } from 'react-bootstrap';
import { showProperties } from '../services/api-helper'
import '../stylesheets/homepage.css'

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: []
    }
  }

  async componentDidMount() {
    const properties = await showProperties()
    console.log(properties)
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
            <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
          </div>
        </div>


        <div class="homepage-images">
          {
            this.state.properties.map(property => (
              <React.Fragment key={property.id} >
                <div>
                  <img src={property.photo} />
                  <p>{property.address}</p>
                  <Link to={`/show-property/${property.id}`}>
                    <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
                  </Link>
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