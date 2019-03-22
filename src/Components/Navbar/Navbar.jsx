import React, { Component } from 'react';
import logo from '../../Images/logo.svg';
import '../../Styles/navbar.scss';
import { logoutUser } from '../../js/actions/';
import { connect } from 'react-redux';
// import Button from '../Button/Button';


class Navbar extends Component {

  showLogout() {
    if (this.props.user) {
      return <button className="blue_btn" onClick={this.props.logoutUser}>Logout</button>
    }
    return null;
  }

  render() {
    return (
      <div className="header btn-shadow">
        <img onClick={() => window.location.href = '/'}href="#default" className="header-logo" src={logo} alt="Logo" srcSet="" />
        <div className="header-right">
        {this.showLogout()}
        {/* <Link to='/' className="active" >APPLY</Link> */}
        {/* <a href="/contact">Contact</a> */}
        {/* <Link to='/about'>APPLY</Link> */}
        {/* <Link>LOGOUT</Link> */}
        {/* {this.LogoutButton(this.props)} */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps, {logoutUser})(Navbar);
