import React, { Component } from 'react';
import { connect } from "react-redux";
import { viewAllClubs } from "../../js/actions/index";
import logo from '../../Images/logo-only.png';
// import avatar from '../../Images/temp-img.png';
import '../../Styles/dashboard.scss';

class IncomingRequests extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div className="user-form">
                <img className="med-logo-only" src={logo} alt="Make School"></img>
                <h1>Incoming Requests</h1>
    
                <ul>
                    {this.props.clubs.filter(club => club.accepted == "false")
                        .map((club, index) => {
                            console.log("here");
                            return <li key={'mykey' + index}>{club.title}</li>
                        }
                    )}
                        <button className="blue_btn">Accept</button>
                        <button className="black_btn">Deny</button>
                </ul>
            </div>     
        );
    };
};

const mapStateToProps = state => {
    return { user: state.user, clubs: state.clubs};
};

function mapDispatchToProps() {
    return {
        viewAllClubs
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(IncomingRequests);
