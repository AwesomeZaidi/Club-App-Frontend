import React, { Component } from 'react';
import '../Styles/home.scss';


class Home extends Component {
    render() {
        return (          
        <div className="home-page">
            <h1>Make School Club App</h1>
            <button onClick={() => window.location.href = '/login'}>Login</button>
        </div>
        );
    };
};

export default Home;
