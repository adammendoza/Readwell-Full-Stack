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

  renderErrors() {
    return(
      <ul>
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
    if(this.props.formHeader === 'Sign up for'){
      return feild();
    } else {
      return '';
    }
  }

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <h2>{this.props.formHeader} Readwell</h2>
          <br/>
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
                className="login-input"
              />
            <br/>
            <input className="session-submit" type="submit" value={this.props.button} />
          </div>
        </form>
        {this.props.navLink}
      </div>
    )
  }
};

export default withRouter(SessionForm);
