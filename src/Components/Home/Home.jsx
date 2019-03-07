import React, { Component } from 'react';
import '../../Styles/home.scss';
import logo from '../../Images/logo-only.png';

class Home extends Component {
    render() {
        return (          
        <div className="home-page">
            <img src={logo} alt="Make School"></img>
            <h1 className="h1-primary">Clubs App</h1>
            <button className="btn-primary" onClick={() => window.location.href = '/login'}>Login</button>
            <button className="btn-primary" onClick={() => window.location.href = '/signup'}>Signup</button>
        </div>
        );
    };
};

export default Home;
