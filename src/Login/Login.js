import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { loginUser } from "../js/actions/index";
import '../Styles/login.scss';

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
        this.props.loginUser(this.state);

        // axios.post(`http://8137bc61.ngrok.io/login`, this.state).then((user) => {
        //     this.props.loginUser(user.data.token);
        //     if (user.statusText === "OK") {
        //         localStorage.setItem("dataItem:", user.data.token)
        //         this.props.history.push('/dashboard');
        //     };
        // }).catch(console.err);
    };

    render() {  
        if (this.props.token.length !== 0) {
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

const mapStateToProps = state => {
    return { token: state.token };
};

// function mapDispatchToProps(dispatch) {
//     return {
//         loginUser: user => dispatch(loginUser(user)) // I DON'T KNOW HOW THIS IS WORKING RIGHT HERE D;
//     };
// };

function mapDispatchToProps() {
    return {
        loginUser // I DON'T KNOW HOW THIS IS WORKING RIGHT HERE D;
    };
};

const LoginUser = connect(mapStateToProps, mapDispatchToProps())(Login);


export default LoginUser;
