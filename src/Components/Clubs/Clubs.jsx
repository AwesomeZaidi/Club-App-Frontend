import React, { Component } from 'react';
import { connect } from "react-redux";
import { viewAllClubs } from "../../js/actions/index";

import logo from '../../Images/logo-only.png';
// import '../../Styles/dashboard.scss';

class Clubs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clubClicked: null
        }
    }
    componentWillMount() {
        return this.props.viewAllClubs();        
    };

    loadClubCard(club) {
        return this.setState({clubClicked: club._id})
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
                            <span onClick={() => this.loadClubCard(club)} className='push-down list-item' key={`mykey${index}`} id={`mykey${index}`}>{club.title}</span>
                            {this.state.clubClicked == club._id && (
                                <div class='club-card'>
                                    <p>{!club.attendees ? 0 : club.attendees.length} Members</p>
                                    <button >Join</button>
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
    };
};

function mapDispatchToProps() {
    return {
        viewAllClubs
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Clubs);