import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>This is the home page</p>
        <p>
            Already have an account? <Link to="/login">Login</Link>
        </p>
        <p>
            Need an account? <Link to="/register">Register</Link>
        </p>
      </div>
    );
  }
}