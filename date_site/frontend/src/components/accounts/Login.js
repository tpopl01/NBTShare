import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
    username: '',
    password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  handleUsernameChange(e){
    this.setState({
        username: e.target.value,
    });
  }

  handlePasswordChange(e){
    this.setState({
        password: e.target.value,
    });
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    return (    
    <div class = "container">
    <div class="card-title primary-bg-colour">
      <h1>Login</h1>
        <div class="card-container secondary-bg-colour">
        <Grid container spacing={1}>
             <Grid item xs={12} align="center">
          <FormControl>
            <TextField
              required={true}
              type="text"
              onChange={this.handleUsernameChange}
              defaultValue={""}
              inputProps={{
                login: PropTypes.func.isRequired,
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
              onChange={this.handlePasswordChange}
              defaultValue={""}
              inputProps={{
                login: PropTypes.func.isRequired,
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
              Need an account? <Link to="/register">Register</Link>
            </p>
        </Grid>
        </Grid>
 </div></div></div>
    );
  }
}
