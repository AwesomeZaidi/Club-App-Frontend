import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';

const mapStateToProps = state => {
    return { articles: state.articles, user: state.user };
};

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    };

    render() {
        if (this.props.user.length === 0) {
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
