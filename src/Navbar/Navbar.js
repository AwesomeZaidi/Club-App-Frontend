import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.svg';
import '../Styles/navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="header btn-shadow">
        <img href="#default" className="header-logo" src={logo} alt="Logo" srcSet="" />
        <div className="header-right">
          <Link to='/' className="active" >APPLY</Link>
          {/* <a href="/contact">Contact</a> */}
          <Link to='/about'>APPLY</Link>
          <Link to='/login'>APPLY</Link>
  
        </div>
      </div>
    )
  }
}

export default Navbar;
