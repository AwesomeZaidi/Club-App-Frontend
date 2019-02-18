import React, { Component } from 'react';
import { Redirect } from 'react-router'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            toLogin: false,
        };
        this.handleClick = this.handleClick.bind(this);
    };
    
    handleClick(path) {
        this.props.history.push('/login');
        console.log("this.props:", this.props);
        this.setState({
            toLogin: true
        });
      };

    render() {
        if (this.state.toLogin === true) {
            return <Redirect to='/login' />
        }
        return (          
        <div>
            <h1>Make School Club App</h1>
            <button onClick={this.handleClick}>Login</button>
        </div>
        );
    };
};

export default Home;
