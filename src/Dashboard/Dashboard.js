import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { loginUser } from "../js/actions/index";

// const mapStateToProps = state => {
//     return { articles: state.articles };
//   };
class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    };
    render() {
        console.log("props:", this.props);
        
        // if (!this.props.user) {
        //     return <Redirect to='/login' />
        // };

        return (
            <div>
                <h1>Dashboard</h1>
            </div>
        );
    };
};
// const DashboardD = connect(null, mapDispatchToProps)(Dashboard);


export default Dashboard;
