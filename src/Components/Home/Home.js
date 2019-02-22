import React, { Component } from 'react';
import '../../Styles/home.scss';


class Home extends Component {
    render() {
        return (          
        <div className="home-page">
            <section className="top">
                <h1 className="h1-primary">Make School Club App</h1>
                <p className="p-primary">Earn your Bachelor's in Applied Computer Science immersed in a community of makers empowered to shape the world</p>
                <button className="btn-primary" onClick={() => window.location.href = '/login'}>Login</button>
                <button className="btn-primary" onClick={() => window.location.href = '/signup'}>Signup</button>

            </section>
        </div>
        );
    };
};

export default Home;
