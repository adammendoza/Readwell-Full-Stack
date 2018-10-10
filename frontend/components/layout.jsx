import React from 'react';
import NavbarContainer from './navbar/navbar_container'
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';



const Layout = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
  </div>
);

export default Layout;
