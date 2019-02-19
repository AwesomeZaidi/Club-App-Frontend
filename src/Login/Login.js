import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            username: '',
            password: ''
        };
    };
  
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    };
    
    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    };

    handleSubmit = event  => {
        console.log("in it");// alert(`A name was submitted: ${this.state.username} ${this.state.password}`);
        event.preventDefault();
        axios.post(`http://ab259c5a.ngrok.io/login`, this.state).then((user) => {
            this.setState({
                user: user
            });
            // if (user.statusText === "OK") { 
            //     window.location.href = '/dashboard'; // redirect was not working here, i don't know why.
            // }          
        }).catch(console.err);
    };

    render() {
        if (this.state.user !== '') {
            return <Redirect to='/dashboard' />
        };
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

export default Login;
