import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Navbar } from 'react-bootstrap';
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

        {/* <div class="container"> */}
        {/* <!-- Example row of columns --> */}
        {/* <div class="row">
            <div class="col-md-4">
              <h2>Heading</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>

            <div class="col-md-4">
              <h2>Heading</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div> */}

        {/* <div class="col-md-4">
              <h2>Heading</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>
          </div>
        </div> */}

        <div class="homepage-images">
          {
            this.state.properties.map(property => (
              <React.Fragment key={property.id} >
                <div>
                  <img src={property.photo} />
                  <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
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