import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import { userProperties } from '../services/api-helper';
import '../stylesheets/profile.css';

class Profile extends Component {
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
      }
    }
  }

  async componentDidMount() {
    const properties = await userProperties(this.props.currentUser.id)
    console.log(properties)
    this.setState({
      properties
    })
  }

  render() {
    return (
      <div>


        <div class="table-profile">
          <h3>Your Properties</h3>

          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Address</th>
                <th>Rooms</th>
                <th>Bathrooms</th>
                <th>Photo</th>
              </tr>
            </thead>
            <tbody>
              {this.state.properties.map(property => (
                <React.Fragment key={property.id} >
                  <tr>
                    <td>{property.id}</td>
                    <td>{property.name}</td>
                    <td>{property.address}</td>
                    <td>{property.rooms}</td>
                    <td>{property.bathrooms}</td>
                    {/* <td>{property.photo}</td> */}
                    <td>Edit</td>
                  </tr>
                </React.Fragment>
              ))
              }
              <tr>
                <td>1,001</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
                <td>stand</td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    )
  }
}

export default withRouter(Profile)