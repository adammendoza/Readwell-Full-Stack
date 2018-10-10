import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Sign In</Link>
      <Link to="/signup">Join</Link>
    </nav>
  );
  const logoutButton = () => (
    <button className="header-button" onClick={logout}>Log Out</button>
  );
  return currentUser ? logoutButton() : sessionLinks();
}

export default Navbar;
