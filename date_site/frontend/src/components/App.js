import React, { Component, Fragment, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';

import { Provider } from 'react-redux';
import { loadUser } from '../actions/auth';

import { render } from "react-dom";
import HomePage from "./HomePage";
import Header from "./layout/Header";
import ProfilePage from './ProfilePage';
import Comments from './Comments';
import NBTPage from './NBTPage';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <div class="wide">
        <Router>
          <Fragment>
            <Header />
            <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/profile" exact component={ProfilePage, HomePage, Comments}></Route>
              <Route path="/nbt" exact component={NBTPage, Comments}></Route>
            </Switch>
            </Fragment>
        </Router>

        
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);