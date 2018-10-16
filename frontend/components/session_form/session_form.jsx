import React from 'react';
import { withRouter, Link } from 'react-router-dom';

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
    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  componentDidMount(){
    this.props.clearSessionErrors();
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
      password: "starwars",
    }
    this.props.processFrom(user);
  }

  handleLogoClick() {
    this.props.history.push("/");
  }

  renderErrors() {
    if(this.props.errors.length > 0){
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
    return '';
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
        <Link to='/'className="logo-link">
          <span className="logo-link-left">read</span>
          <span className="logo-link-right">well</span>
        </Link>
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
              <div className={ this.props.formHeader === 'Sign up for' ? "session-buttons" : "session-buttons signin" } >
                <input className="session-submit" type="submit" value={this.props.button} />
                &nbsp;&nbsp;
                {this.renderTogglePage()}
                {this.props.navLink}
                {this.renderDemoButton()}
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

export default withRouter(SessionForm);
