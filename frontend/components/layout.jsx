import React from 'react';
import NavbarContainer from './navbar/navbar_container'
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash';
import Home from './home';



const Layout = ({ currentUser }) => {
  if(currentUser){
    return (
      <div>
        <header>
          <NavbarContainer />
        </header>

        <Switch>
          <ProtectedRoute exact path='/home' component={Home}/>
          <Redirect to="/home"/>
        </Switch>
      </div>
    );
  } else {
    return (
      <div>
        <header>
          <NavbarContainer />
        </header>

        <Switch>
          <AuthRoute exact path='/splash' component={Splash}/>
          <Redirect to="/splash"/>
        </Switch>
      </div>
    );
  }
};

export default Layout;
