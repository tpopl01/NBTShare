import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

export default class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
        username: '',
        email: '',
        password: '',
        password2: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
    } else {
      const newUser = {
        username,
        password,
        email,
      };
      this.props.register(newUser);
    }
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password, password2 } = this.state;
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
          <FormControl>
            <TextField
              required={true}
              type="text"
              onChange={this.handleChange}
              defaultValue={""}
              inputProps={{
                register: PropTypes.func.isRequired,
                isAuthenticated: PropTypes.bool,
                style: { textAlign: "center" },
              }}
            />
            <FormHelperText>
              <div align="center">Username</div>
            </FormHelperText>
            <TextField
              required={true}
              type="text"
              onChange={this.handleChange}
              defaultValue={""}
              inputProps={{
                register: PropTypes.func.isRequired,
                isAuthenticated: PropTypes.bool,
                style: { textAlign: "center" },
              }}
            />
            <FormHelperText>
              <div align="center">Email</div>
            </FormHelperText>
            <TextField
              required={true}
              type="text"
              onChange={this.handleChange}
              defaultValue={""}
              inputProps={{
                register: PropTypes.func.isRequired,
                isAuthenticated: PropTypes.bool,
                style: { textAlign: "center" },
              }}
            />
            <FormHelperText>
              <div align="center">Password</div>
            </FormHelperText>
            <TextField
              required={true}
              type="text"
              onChange={this.handleChange}
              defaultValue={""}
              inputProps={{
                register: PropTypes.func.isRequired,
                isAuthenticated: PropTypes.bool,
                style: { textAlign: "center" },
              }}
            />
            <FormHelperText>
              <div align="center">Password</div>
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
        </Grid>
        </Grid>

   
    );
  }
}
