import React from 'react';
import NavbarContainer from './navbar/navbar_container'
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash';
import Home from './home';
import BookShowContainer from './book/book_show_container';
import AddBookFormContainer from './book/add_book_form_container';
import MyShelvesContainer from './shelves/my_shelves_container';


const Layout = ({ currentUser }) => {
  if(currentUser){
    return (
      <div>
        <header>
          <NavbarContainer />
        </header>

        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route path='/books/:bookId' component={BookShowContainer}/>
          <Route exact path="/book/new" component={AddBookFormContainer}/>
          <Route exact path="/shelves/:currShelf" component={MyShelvesContainer}/>
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
          <Route path='/home' component={Home}/>
          <Route path='/books/:bookId' component={BookShowContainer}/>
          <Redirect to="/splash"/>
        </Switch>
      </div>
    );
  }
};

export default Layout;
