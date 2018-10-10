import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById('root');

  // TEST #TODO
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  // #NB

  ReactDOM.render(<h1>ReadWell</h1>, root);
});
