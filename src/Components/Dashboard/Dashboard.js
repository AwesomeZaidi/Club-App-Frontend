import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';

class Dashboard extends Component {

    // componentDidMount() {
    //     // call the action function to get the data here.
    // }    

    memberView() {
        return (
            <div>
                <h1>Member Dashboard</h1>
            </div>
        );
    }

    leaderView() {
        return (
            <div>
                <h1>Leader Dashboard</h1>
            </div>
        );
    };

    adminView() {
        return (
            <div>
                <h1>Admin Dashboard</h1>
            </div>
        );
    };

    render() {
        const user = this.props.user;
        console.log("user:", user);
        console.log("user.type:", user.type); 

        switch(user.type) {
            case false || undefined:
                return <Redirect to='/login' />
            case 'member':
                console.log("ere");
                return this.memberView();
            case 'leader':
            return this.leaderView();
            case 'admin':
            return this.adminView();
            default:
                return null;
        };
    };
};

const mapStateToProps = state => {
    return { user: state.user };
};

export default connect(mapStateToProps, null)(Dashboard);

// export default Dashboard;
