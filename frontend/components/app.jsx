//React Imports
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

//Components
import Footer from './footer';
import Nav from './nav'
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import ListingContainer from './listing/listing_container'
import Main from './main';


const App = () => {
  return (
    <div>
      <Nav />
        <Route path="/listings/:listingId" component={ListingContainer} />
        <Route path="/" component={Main} />
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />
      <Footer />
    </div>
  )
}

export default App;
