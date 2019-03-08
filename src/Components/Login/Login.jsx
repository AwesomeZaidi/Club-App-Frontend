import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { loginUser } from "../../js/actions/index";
import logo from '../../Images/logo-only.png';

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
    };

    render() {  
        console.log("this.props.user:", this.props.user);
        
        if (this.props.user) {
            return <Redirect to='/dashboard' />
        };
        
        return (
            <div className="user-form">
                <img className="med-logo-only" src={logo} alt="Make School"></img>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='username' id='username' placeholder='Username' value={this.state.username} onChange={this.handleChange} />                  
                    <input type='password' name='password'  id='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                    <button className="black_btn" type='submit' disabled={!this.validateForm()} >Submit</button> 
                </form>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return { user: state.user };
};

function mapDispatchToProps() {
    return {
        loginUser // value is the function we import at the top
    };
};

const LoginUser = connect(mapStateToProps, mapDispatchToProps())(Login);

export default LoginUser;
