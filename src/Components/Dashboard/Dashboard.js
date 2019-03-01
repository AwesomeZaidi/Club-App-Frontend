import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { requestClub, viewAllClubs, getClubLeaderClub } from "../../js/actions/index";

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

    componentWillMount() {
        if (this.props.user.type === `admin`) {
            this.props.viewAllClubs(this.props.user);
        };
        if (this.props.user.type === `leader` && this.props.user.accepted) {
            console.log("this.props.user.clubs[0]:", this.props.user.clubs[0]);
            this.props.getClubLeaderClub(this.props.user.clubs[0], this.props.user._id);
        };
    };

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
            <div>
                <h1>Club leader dashboard</h1>
                <p>{JSON.stringify(this.props.leaderClub.title)}</p>
            </div>
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
        
        console.log("adminviewwww");
        console.log(this.props.clubs)
        
        return (
            <div>
                <h1>Admin Dashboard</h1>

                <h2>Clubs requesting to join</h2>
                <ul>
                    {this.props.clubs.filter(club => 
                        club.title === "Test"
                    ).map((club, index) => (
                        <li>{club.title}</li>
                    ))}
                    {/* {this.props.clubs} */}
                </ul>
            </div>
        );
    };

    render() {
        console.log("render called");
        const user = this.props.user;
        console.log("USER:", user);
        switch(user.type) {
            case false || undefined:
                console.log("false hit");
                return <Redirect to='/login' />
            case 'member':
                console.log("member hit");
                return this.memberView();
            case 'leader':
                console.log("leader hit");
                return this.leaderView();
            case 'admin':
                console.log("admin hit");
                return this.adminView();
            default:
                return null;
        };
    };
};

const mapStateToProps = state => {
    return { user: state.user, clubs: state.clubs, leaderClub: state.leaderClub };
};

function mapDispatchToProps() {
    return {
        requestClub,
        viewAllClubs,
        getClubLeaderClub
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Dashboard);

// export default Dashboard;
