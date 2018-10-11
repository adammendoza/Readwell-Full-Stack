import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="navbar">
      <h1 className="logo-link" >
        <span className="logo-link-left">read</span>
        <span className="logo-link-right">well</span>
      </h1>

      <div className="nav-right">
        <Link to="/login">Sign In</Link>
        &nbsp;
        <Link to="/signup">Join</Link>
      </div>
    </nav>
  );
  const logoutButton = () => (
    <nav className="navbar">
      <h1 className="logo-link">
        <span className="logo-link-left">read</span>
        <span className="logo-link-right">well</span>
      </h1>

      <div className="nav-right">
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    </nav>
  );
  return currentUser ? logoutButton() : sessionLinks();
}

export default Navbar;
