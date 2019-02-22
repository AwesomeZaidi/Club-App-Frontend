import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';

const mapStateToProps = state => {
    return { token: state.token };
};

class Dashboard extends Component {

    render() {
        if (!this.props.token) {
            return <Redirect to='/login' />
        };
        return (
            <div>
                <h1>Dashboard</h1>
            </div>
        );
    };
};
export default connect(mapStateToProps, null)(Dashboard);


// export default Dashboard;
