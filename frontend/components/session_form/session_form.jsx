import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  update(feild) {
    return e => this.setState({
      [feild]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processFrom(user);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const user = {
      email: "demo@demosaregreat.com",
      password: "demooo",
    }
    this.props.processFrom(user);
  }

  renderErrors() {
    return(
      <ul className='errors-list'>
        {this.props.errors.map((error, i) =>(
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderNameFeild() {
    const feild = () => (
      <div>
        <label>Name</label>
        <br/>
          <input type="text"
            value={this.state.name}
            onChange={this.update('name')}
            className='session-form-input'
            placeholder='Name'
          />
      </div>
    );
    if(this.props.formHeader === 'Sign up for') {
      return feild();
    }
      return '';
  }

  renderSignupMessage() {
    const message = () => (
      <p className="signup-message">Sign up to see what your friends are reading, get book recommendations, and join the world's largest community of readers.</p>
    );
    if(this.props.formHeader === 'Sign up for') {
      return message();
    }
    return '';
  }

  renderDemoButton() {
    const button = () => (
      <button
        onClick={this.handleDemoSubmit}
        className="session-submit"
        >Demo User
      </button>
    );
    if (this.props.formHeader === 'Sign up for') {
      return '';
    }
    return button();
  }

  renderTogglePage() {
    if (this.props.formHeader === 'Sign up for') {
      return (
        <p className="toggle-message">Already a member?</p>
      );
    }
    return (
      <p className="toggle-message">Not a member?</p>
    );
  };


  render() {
    return (
      <div className="session-form-backround">
        <h1 className="logo-link">
          <span className="logo-link-left">read</span>
          <span className="logo-link-right">well</span>
        </h1>
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit} className="session-form-box">
            <h2>{this.props.formHeader} Readwell</h2>
            {this.renderSignupMessage()}
            {this.renderErrors()}
            <div className='session-form'>
              {this.renderNameFeild()}
              <label>Email Address</label>
              <br/>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="session-form-input"
                  placeholder="you@yours.com"
                />
              <br/>
              <label>Password</label>
              <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="session-form-input"
                />
              <br/>
              <div className="session-buttons">
                <input className="session-submit" type="submit" value={this.props.button} />
                &nbsp;&nbsp;
                {this.renderTogglePage()}
                {this.props.navLink}
                {this.renderDemoButton()}
              </div>
            </div>
          </form>
        </div>
        <img src='../../app/assets/images/goodreads_backround.jpg' />
      </div>
    )
  }
};

export default withRouter(SessionForm);
