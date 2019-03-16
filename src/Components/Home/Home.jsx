import React, { Component } from 'react';
import '../../Styles/home.scss';
import logo from '../../Images/logo-only.png';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
class Home extends Component {
    render() {
        if (this.props.user) {
            return <Redirect to='/dashboard' />
        } else {
            return (          
                <div className="home-page">
                    <img src={logo} alt="Make School"></img>
                    <h1 className="h1-primary">Clubs App</h1>
                    <button className="black_btn" onClick={() => window.location.href = '/login'}>Login</button>
                    <button className="black_btn" onClick={() => window.location.href = '/signup'}>Signup</button>
                </div>
            );
        };
    };
};

const mapStateToProps = state => { return { user: state.user }; };
export default connect(mapStateToProps, null)(Home);
