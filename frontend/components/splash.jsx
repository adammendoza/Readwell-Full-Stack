import React from 'react';
import { Link } from  'react-router-dom';

const Splash = () => (
  <div className="splash">
    <div className="welcome">
      <div className="headline"></div>
    </div>

    <div className="splash-signup">
      <p>New here? Create a free account!</p>
      <Link to="/signup" >Sign Up</Link>
    </div>
  </div>
);

export default Splash;
