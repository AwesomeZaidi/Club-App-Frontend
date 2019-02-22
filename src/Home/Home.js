import React, { Component } from 'react';
import '../Styles/home.scss';


class Home extends Component {
    render() {
        return (          
        <div className="home-page">
            <section className="top">
                <h1>Make School Club App</h1>
                <button className="btn-primary" onClick={() => window.location.href = '/login'}>Login</button>
            </section>
        </div>
        );
    };
};

export default Home;
