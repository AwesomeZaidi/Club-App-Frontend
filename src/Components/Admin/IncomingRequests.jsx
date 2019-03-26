import React, { Component } from 'react';
import { connect } from "react-redux";
import { getAllClubsRequestingToJoin } from "../../js/actions/index";
import logo from '../../Images/logo-only.png';
import axios from 'axios';
import '../../Styles/dashboard.scss';

class IncomingRequests extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        if (this.props.user.type === 'admin') {
            return this.props.getAllClubsRequestingToJoin();        
        };
        return null;
    };

    async handleAccept(clubId) {
        console.log("hereeee");
        await axios.post('/acceptClub', {clubId});
        await this.props.getAllClubsRequestingToJoin();
    };

    render() {
        return (
            <div className="user-form">
                <img className="med-logo-only" src={logo} alt="Make School"></img>
                <h1>Incoming Requests</h1>
                <ul>
                    {this.props.all_clubs.map((club, index) => {
                        return (
                            <div>
                                <li key={'mykey' + index}>{club.title}</li>
                                <button onClick={() => this.handleAccept(club._id)} className="blue_btn">Accept</button>
                                <button className="black_btn">Deny</button>
                            </div>
                        )
                    })}
                </ul>
            </div>     
        );
    };
};

const mapStateToProps = state => {
    return { user: state.user, all_clubs: state.all_clubs};
};

function mapDispatchToProps() {
    return {
        getAllClubsRequestingToJoin
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(IncomingRequests);
