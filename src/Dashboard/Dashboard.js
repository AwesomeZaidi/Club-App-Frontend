import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { loginUser } from "../js/actions/index";

const mapStateToProps = state => {
    return { articles: state.articles, user: state.articles };
};

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    };
    render() {
        console.log("props:", this.props);
        console.log("props user:", this.props.user); 

        if (this.props.user.length === 0) {
            console.log("in the if");
            
            return <Redirect to='/login' />
        };
        return (
            <div>
                <h1>Dashboard</h1>
            </div>
        );
    };
};
const DashboardD = connect(mapStateToProps, null)(Dashboard);


export default DashboardD;
