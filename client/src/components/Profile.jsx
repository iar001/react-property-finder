import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import { userProperties } from '../services/api-helper';
import { Table } from 'react-bootstrap';
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
        parking_spaces: 0,
        photo: ""
      }
    }
  }

  async componentDidMount() {
    const properties = await userProperties(this.props.currentUser.id)
    this.setState({
      properties
    })
  }

  render() {
    return (
      <div>


        <div class="table-profile">
          <h3>Your Properties</h3>

          <Table striped hover >
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Address</th>
                <th>Bedrooms</th>
                <th>Bathrooms</th>
                <th>Parking Spaces</th>
                <th>Description</th>
                <th>Show/Edit</th>
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
                    <td>{property.parking_spaces}</td>
                    <td>{property.details}</td>
                    <Link to={`/show-property/${property.id}`}>
                      <td>Show</td>
                    </Link>
                    <Link to={`/editproperty/${property.id}`}>
                      <td>Update</td>
                    </Link>
                  </tr>
                </React.Fragment>
              ))
              }
            </tbody>
          </Table>
        </div>

      </div>
    )
  }
}

export default withRouter(Profile)