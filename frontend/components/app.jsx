import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Footer from './footer';
import Nav from './nav'
import LoginFormContainer from './session_form/login_form_container'

const App = () => (
  <div>
    <Nav />
      <Route exact path="/login" component={LoginFormContainer} />
    <Footer />
  </div>
)

export default App;
