import React, { Component } from 'react';
import { connect } from "react-redux";
import { viewAllClubs } from "../../js/actions/index";

import logo from '../../Images/logo-only.png';
// import '../../Styles/dashboard.scss';

class Clubs extends Component {

    componentWillMount() {
        if (this.props.user) {
            return this.props.viewAllClubs(this.props.user);
        };
        return null; // maybe redirect user even...        
    };


    allClubsList() {
        return (
            <ul className='top-down-center'>
                {this.props.all_clubs.map(
                    (club, index) => {
                        return <span onClick={() => {this.loadClubCard(index)}} class='push-down list-item' key={'mykey' + index}>{club.title}</span>
                    }
                )}
            </ul>
        );
    };

    loadClubCard(index) {
        console.log("here");
        console.log("index:", index);
        return (
            <div class='card'>
                <p>{index}</p>
                <p>{this.props.all_clubs[{index}]}</p>
            </div>  
        );
    };

    render() {
        console.log("this.props.all_clubs:", this.props.all_clubs);
        return (
            <section className='push-down top-down-center'>
                <div className='logo-title-align'>
                    <img className="small-logo-only" src={logo} alt="Make School"></img>
                    <h1 className='h1-primary'>All Clubs</h1>
                </div>
                {this.allClubsList()}
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