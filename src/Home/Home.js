import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (          
        <div>
            <h1>Make School Club App</h1>
            <button onClick={() => window.location.href = '/login'}>Login</button>
        </div>
        );
    };
};

export default Home;
