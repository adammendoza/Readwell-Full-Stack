import React from 'react';

class ProfileDropDown extends React.Component {
  constructor(props){
    super(props);
    this.logout = this.props.logout;
    this.currentUser = this.props.currentUser;
    this.toggleDrop = this.toggleDrop.bind(this);
    this.state = { menuDropped: false }
  }

  toggleDrop(){
    this.setState(prevState => ({ menuDropped: !prevState.menuDropped}))
  }


  render() {
    const { menuDropped } = this.state;
    return (
      <div className={ menuDropped ? "profile-dropdown toggleOn" : "profile-dropdown"}>
        <div className='dropdown-button' onClick={this.toggleDrop}>
          <img src="https://s.gr-assets.com/assets/nophoto/user/u_60x60-267f0ca0ea48fd3acfd44b95afa64f01.png"/>
        </div>

        {menuDropped &&
        <ul className="profile-dropdown-ul">
          <li className="userName">{this.currentUser.name.toUpperCase()}</li>
          <li onClick={this.logout} className="signout">Sign Out</li>
        </ul>
        }
      </div>
    );
  }
};

export default ProfileDropDown;
