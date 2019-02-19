import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { loginUser } from "../js/actions/index";

function mapDispatchToProps(dispatch) {
    return {
        loginUser: user => dispatch(loginUser(user)) // I DON'T KNOW HOW THIS IS WORKING RIGHT HERE D;
    };
};
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    };
  
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    };
    
    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log("in it");// alert(`A name was submitted: ${this.state.username} ${this.state.password}`);
        axios.post(`http://5915c677.ngrok.io/login`, this.state).then((user) => {
            console.log("user:", user);
            
            this.props.loginUser({ user });
            if (user.statusText === "OK") { 
                window.location.href = '/dashboard'; // redirect was not working here, i don't know why.
            };
        }).catch(console.err);
    };

    render() {
        // if (this.state.user !== '') {
        //     return <Redirect to='/dashboard' />
        // };
        return (
            <div>
                <form className='login-form' onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' id='username' placeholder='Username' value={this.state.username} onChange={this.handleChange} />
                    <label htmlFor='password'>Password</label>                    
                    <input type='password' name='password'  id='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                    <button type='submit' disabled={!this.validateForm()} >Submit</button>
                </form>
            </div>
        );
    };
};
const LoginUser = connect(null, mapDispatchToProps)(Login);


export default LoginUser;
