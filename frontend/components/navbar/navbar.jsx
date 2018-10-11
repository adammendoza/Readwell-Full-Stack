import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropDown from './profile_dropdown.jsx';

const Navbar = ({ currentUser, logout }) => {
  const logoLink = () => (
    <Link to='/'className="logo-link">
      <span className="logo-link-left">read</span>
      <span className="logo-link-right">well</span>
    </Link>
  );
  const sessionLinks = () => (
    <nav className="navbar">
      {logoLink()}

      <div className="nav-right">
        <Link to="/login">Sign In</Link>
        &nbsp;
        <Link to="/signup">Join</Link>
      </div>
    </nav>
  );
  const logoutButton = () => (
    <nav className="navbar">
      {logoLink()}

      <div className="nav-right">
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    </nav>
  );
  const profileDropDown = () => (
    <nav className="navbar">
      {logoLink()}

      <ProfileDropDown currentUser={currentUser} logout={logout}/>
    </nav>
  );
  return currentUser ? profileDropDown() : sessionLinks();
}

export default Navbar;
