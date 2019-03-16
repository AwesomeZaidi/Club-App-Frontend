import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { requestClub, viewAllClubs, getClubLeaderClub } from "../../js/actions/index";
import logo from '../../Images/logo-only.png';
import avatar from '../../Images/temp-img.png';
import '../../Styles/dashboard.scss';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }; 
    };
    
    handleChange = event => this.setState({ [event.target.id]: event.target.value });

    handleSubmit = event => {
        event.preventDefault();
        this.props.requestClub(this.props.user, this.state);
    };

    componentWillMount() {
        if (this.props.user.type === `admin`) {
            this.props.viewAllClubs(this.props.user);
        };
        if (this.props.user.type === `leader` && this.props.user.accepted) {
            this.props.getClubLeaderClub(this.props.user.clubs[0], this.props.user._id);
        };
    };
    
    cardLink() {
        if (this.props.clubs.length < 1) {
            return (
                <div className="card">
                    <p onClick={() => window.location.href = '/clubs'}>Go join some clubs</p>
                </div>
            );
        } else {

            return (
                <div className="card">
                
                    {this.props.clubs.map((club, index) => {
                            console.log("club:", club);
                            return <li key={'mykey' + index}>{club.title}</li>
                        }
                    )};
                </div>
            );
        };
    };

    memberView() {
        return (        
            <div className="dashboard">
                <div className="top">
                    <img className="small-img-only" src={logo} alt="Make School" />
                    <img className="med-logo-only" src={ avatar } alt="Avatar" />
                </div>
                <h1>Welcome, {this.props.user.username}</h1>
                <h2>Upcoming Events</h2>
                <div className="events-cards">
                    {this.cardLink()}
                </div>
            </div>
        );
    };

    leaderView() {
        const leaderDashboard = (
            <div className="dashboard">
                <div className="top">
                    <img className="small-img-only" src={logo} alt="Make School" />
                    <img className="med-logo-only" src={ avatar } alt="Avatar" />
                </div>
                <h1 >Welcome, {this.props.user.username}</h1>
                <section className="club-section user-form">
                    <p class="h1-primary">{this.props.leaderClub.title}</p>
                    <button onClick={() => window.location.href = '/add'} className="black_btn">Add Event</button>
                    <button className="black_btn">Manage Club</button>
                </section>
                <h2>Upcoming Events</h2>
                <div className="events-cards">
                    {this.cardLink()}
                </div>
            </div>
        );  

        const request = (
            <div className="user-form">
                <img className="med-logo-only" src={logo} alt="Make School"></img>
                <h1>Request a Club Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <legend>Start a club</legend>
                    <label htmlFor="title">Title</label>
                    <input value={this.state.title} id="title" name="title" placeholder="Title" onChange={this.handleChange} />
                    <button className="black_btn">Submit</button>
                </form>
            </div>
        );

        const waitingVerification = (
            <h1>Your club is awaiting verification</h1>
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
            <div className="user-form">
                <img className="med-logo-only" src={logo} alt="Make School"></img>
                <h1>Admin Dashboard</h1>
                <button onClick={() => window.location.href = '/incomingRequests'} className="blue_btn">Incoming Requests</button>
            </div>
        );
    };

    render() {
        const user = this.props.user;
        switch(user.type) {
            case false || undefined:
                return <Redirect to='/login' />
            case 'member':
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
    return {
        user: state.user,
        clubs: state.clubs,
        leaderClub: state.leaderClub
    };
};

function mapDispatchToProps() {
    return {
        requestClub,
        viewAllClubs,
        getClubLeaderClub
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Dashboard);
