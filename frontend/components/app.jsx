//React Imports
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

//Components
import Footer from './footer';
import Nav from './nav';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import ListingContainer from './listing/listing_container';
import ExploreContainer from './explore/explore_container';
import Main from './main';


const App = () => {
  return (
    <div>
      <Route path="/" component={Nav} />
        <div className='main-class'>
          <Switch>
            <Route path="/listings/:listingId" component={ListingContainer} />
            <Route path="/explore" component={ExploreContainer} />
            <Route path="/" component={Main} />
          </Switch>
          <LoginFormContainer />
          <SignupFormContainer />
        </div> 
      <Footer />
    </div>
  )
}

export default App;
