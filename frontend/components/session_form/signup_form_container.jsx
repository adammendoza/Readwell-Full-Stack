import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateTopProps = ({ errors }) => {
  return {
    errors: errors.session,
    formHeader: 'Sign up for',
    button: 'Sign up',
    navLink: <Link to="/login">Log In</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processFrom: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(SessionForm);
