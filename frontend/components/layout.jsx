import React from 'react';
import NavbarContainer from './navbar/navbar_container'
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash';



const Layout = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>

    <Switch>
      <Route exact path='/' component={Splash}/>
      <Redirect to="/"/>
    </Switch>
  </div>
);

export default Layout;
