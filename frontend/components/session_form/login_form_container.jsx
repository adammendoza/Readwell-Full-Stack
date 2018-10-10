import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateTopProps = ({ errors }) => {
  return {
    errors: errors.session,
    formHeader: 'Sign in to',
    button: 'Sign in',
    navLink: <Link to="/signup">Sign Up</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processFrom: (user) => dispatch(login(user))
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(SessionForm);
