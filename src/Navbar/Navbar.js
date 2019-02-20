import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.svg';
import '../Styles/navbar.scss';
import { logoutUser } from '../js/actions/';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    return (
      <div className="header btn-shadow">
        <img href="#default" className="header-logo" src={logo} alt="Logo" srcSet="" />
        <div className="header-right">
          <Link to='/' className="active" >APPLY</Link>
          {/* <a href="/contact">Contact</a> */}
          <Link to='/about'>APPLY</Link>
          {/* <Link>LOGOUT</Link> */}
          <button onClick={this.props.logoutUser}>Logout</button>
  
        </div>
      </div>
    )
  }
}

export default connect(null, {logoutUser})(Navbar);
// currying a function, kinda like a thunk lol