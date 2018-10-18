import React from 'react';
import { Link } from  'react-router-dom';

const Splash = () => (
  <div className="splash">
    <div className="upper">
      <div className="welcome">
        <div className="headline"></div>
      </div>

      <div className="splash-signup">
        <p>New here? Create a free account!</p>
        <Link to="/signup" >Sign Up</Link>
      </div>
    </div>

    <div className="lower">
      <div>
        <h2>Deciding what to read next?</h2>
        <p>You're in the right place. Tell us what title or genres you've in the past, and we’ll give you surprisingly insightful recommendations.</p>
      </div>

      <div>
        <h2>What are your friends reading?</h2>
        <p>Chances are your friends are discussing their favorite (and least favorite) books on Goodreads.</p>
      </div>
    </div>
  </div>
);

export default Splash;
