import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { requestClub } from "../../js/actions/index";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    };
    // componentDidMount() {
    //     // call the action function to get the data here.
    // }    

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.requestClub(this.props.user, this.state);
    };

    memberView() {
        return (
            <div>
                <h1>Member Dashboard</h1>
            </div>
        );
    }

    leaderView(user) {
        const request = (
            <div>
            <h1>Leader Request Start Club Form</h1>
            <form onSubmit={this.handleSubmit}>
                <legend>Start a club</legend>
                <label htmlFor="title">Title</label>
                <input value={this.state.title} id="title" name="title" placeholder="Title" onChange={this.handleChange} />
                <button className="btn-primary">Submit</button>
            </form>
            </div>
        );

        const waitingVerification = (
            <h1>Your club is awaiting verification</h1>
        );

        const leaderDashboard = (
            <h1>Club leader dashboard</h1>
        );        
        if (!this.props.user.requested || this.props.user.requested === false) {
            return request;
        } else if (this.props.user.requested) {
            if (this.props.user.accepted) {
                return leaderDashboard;
            } else if (this.props.user.accepted === false || !this.props.user.accepted) {
                return waitingVerification;
            };
        };
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

function mapDispatchToProps() {
    return {
        requestClub // I DON'T KNOW HOW THIS IS WORKING RIGHT HERE D;
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Dashboard);

// export default Dashboard;
