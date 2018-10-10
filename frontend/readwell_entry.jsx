import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import {login, signup, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById('root');
  const store = configureStore();
  // TEST #TODO
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  // #NB

  ReactDOM.render(<h1>ReadWell</h1>, root);
});
