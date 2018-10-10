import React from 'react';
import NavbarContainer from './navbar/navbar_container'
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>

    <Route path="/login" component={LoginFormContainer}/>
    <Route path="/signup" component={SignupFormContainer}/>
  </div>
);

export default App;
