import React, { Component } from 'react';
import { connect } from "react-redux";
import { createEvent } from "../../js/actions/index";
import logo from '../../Images/logo-only.png';
// import '../../Styles/dashboard.scss';

class Clubs extends Component {
    render() {
        return (
            <section className='push-down top-down-center'>
                <div className='logo-title-align'>
                    <img className="small-logo-only" src={logo} alt="Make School"></img>
                    <h1 className='h1-primary'>All Clubs</h1>
                </div>
                <ul className='top-down-center'>
                    <span className='push-down list-item'>Test Club</span>
                    <span className='push-down list-item'>Test Club</span>
                    <span className='push-down list-item'>Test Club</span>
                    <span className='push-down list-item'>Test Club</span>
                    <span className='push-down list-item'>Test Club</span>
                </ul>
            </section>
        );
    };
};

export default Clubs;