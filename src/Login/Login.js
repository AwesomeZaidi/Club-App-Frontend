import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    // this.handleClick = this.handleChange.bind(this);
    // this.validateForm = this.validateForm.bind(this);
    }
  
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }
    
    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }
    // handleChange(e) {
    //     this.setState({ value: e.target.value });
    // };

    handleSubmit = event  => {
        alert(`A name was submitted: ${this.state.username} ${this.state.password}`);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                    <label htmlFor="password">Password</label>                    
                    <input type="password" name="password"  id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    <button type="submit" disabled={!this.validateForm()} >Submit</button>
                </form>
            </div>
        );
    };
};

export default Login;
