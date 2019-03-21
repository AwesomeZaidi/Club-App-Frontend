import React, { Component } from 'react';
import { connect } from "react-redux";
import { createEvent } from "../../js/actions/index";
import logo from '../../Images/logo-only.png';
// import '../../Styles/dashboard.scss';

class Clubs extends Component {
    render() {
        return (
            <section class='top-down-center-section'>
                <div class='logo-title-align'>
                    <img className="med-logo-only" src={logo} alt="Make School"></img>
                    <h1>All Clubs</h1>
                </div>
            </section>
        );
    };
};

export default Clubs;