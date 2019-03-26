import React, { Component } from 'react';
import { connect } from "react-redux";
import { viewAllClubs, joinClub } from "../../js/actions/index";

import logo from '../../Images/logo-only.png';
// import '../../Styles/dashboard.scss';

class Clubs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonText: 'JOIN',
            clubClicked: null
        }
    }
    componentWillMount() {
        return this.props.viewAllClubs();        
    };

    async handleClick(club) {
        await this.props.joinClub(club._id);
        await this.props.viewAllClubs();
        return this.setState({ buttonText: 'JOINED' });
    };

    loadClubCard(clubId) {
        return this.setState({clubClicked: clubId})
    };

    render() {
        console.log("this.props.all_clubs:", this.props.all_clubs);
        return (
            <section className='push-down top-down-center'>
                <div className='logo-title-align'>
                    <img className="small-logo-only" src={logo} alt="Make School"></img>
                    <h1 className='h1-primary'>All Clubs</h1>
                </div>
                <ul className='top-down-center'>
                {this.props.all_clubs.map(
                    (club, index) => (
                        <div>
                            <span onClick={this.state.clubClicked != null ? () => this.loadClubCard(null) : () => this.loadClubCard(club._id)} className='push-down list-item' key={`mykey${index}`} id={`mykey${index}`}>{club.title}</span>
                            {this.state.clubClicked == club._id && (
                                <div className='club-card'>
                                    <p>{!club.attendees ? 0 : club.members.length} Members</p>
                                    <button onClick={() => this.handleClick(club)}>{this.state.buttonText}</button>
                                    <p onClick={() => window.location.href = `/club/${club._id}`}>More Info</p>
                                </div>
                            )}
                        </div>
                    )
                )}
            </ul>
            </section>
        );
    };
};
const mapStateToProps = state => {
    return {
        all_clubs: state.all_clubs,
        user: state.user,
        users_clubs: state.users_clubs
    };
};

function mapDispatchToProps() {
    return {
        viewAllClubs,
        joinClub
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Clubs);