import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import { userProperties } from '../services/api-helper';

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

  
  render() {
    return (
      <div>

      </div>
    )
  }
}
