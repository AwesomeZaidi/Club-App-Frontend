import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.svg';
import '../Styles/navbar.scss';
import { logoutUser } from '../js/actions/';
import { connect } from 'react-redux';
// import Button from '../Button/Button';


class Navbar extends Component {

  render() {
    // function LogoutButton(props) {
    //   if (this.props.token) {
    //     return <Button onClick={this.props.logoutUser} text="Logout"/>;
    //   }
    // }
    return (
      <div className="header btn-shadow">
        <img href="#default" className="header-logo" src={logo} alt="Logo" srcSet="" />
        <div className="header-right">
          {/* <Link to='/' className="active" >APPLY</Link> */}
          {/* <a href="/contact">Contact</a> */}
          {/* <Link to='/about'>APPLY</Link> */}
          {/* <Link>LOGOUT</Link> */}
          {/* {this.LogoutButton(this.props)} */}
          <button onClick={this.props.logoutUser}>Logout</button>
  
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { token: state.token };
};

export default connect(null, {logoutUser})(Navbar);
// currying a function, kinda like a thunk lol