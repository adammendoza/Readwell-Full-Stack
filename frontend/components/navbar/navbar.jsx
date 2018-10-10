import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Sign In</Link>
      <Link to="/signup">Join</Link>
    </nav>
  );
  const redirect = () => (
    <Redirect to='/home'/>
  );
  return currentUser ? redirect() : sessionLinks();
}

export default Navbar;
