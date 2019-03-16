import React, { Component } from 'react';
import { connect } from "react-redux";
import { createEvent } from "../../js/actions/index";
import logo from '../../Images/logo-only.png';
import '../../Styles/dashboard.scss';

class Add extends Component {

    handleSubmit = e => {
        event.preventDefault();
        this.props.loginUser(this.state);
    };

    render() {
        return (
            <div className="user-form">
                <img className="med-logo-only" src={logo} alt="Make School"></img>
                <h1>Add Event</h1>
                <form onSubmit={this.handleSubmit}>
                
                </form>
            </div>     
        );
    };
};

const mapStateToProps = state => {
    return { user: state.user, clubs: state.clubs};
};

function mapDispatchToProps() {
    return {
        createEvent
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Add);
