import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { signupUser } from "../../js/actions/index";
import logo from '../../Images/logo-only.png';

class Signup extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            number: '',
            username: '',
            password: '',
            type: 'member'
        };
    };
  
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0 && this.state.firstName.length > 0 && this.state.lastName.length > 0 && this.state.email.length > 0;
    };
    

    handleTypeChange = e => {
        this.setState({ [e.target.id]: e.memberType });
    };

    handleChange = (event) => {   
        this.setState({ [event.target.id]: event.target.value });
        // const obj = {};
        // obj[event.target.id] = event.memberType;
        // this.setState(obj);        
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.signupUser(this.state);
    };

    LeaderView() {
        return (
            <div className="user-form">
                <img className="med-logo-only" src={logo} alt="Make School"></img>
                <h1 className='h1-primary'>Leader Signup</h1>
                <form className='user-form signup-form' onSubmit={this.handleSubmit}>
                    <input type='text' name='firstName' id='firstName' placeholder='Firt Name' value={this.state.firstName} onChange={this.handleChange} />
                    <input type='text' name='lastName' id='lastName' placeholder='Last Name' value={this.state.lastName} onChange={this.handleChange} />
                    <input type='text' name='username' id='username' placeholder='Username' value={this.state.username} onChange={this.handleChange} />
                    <input type='text' name='number' id='number' placeholder='Phone Number' value={this.state.number} onChange={this.handleChange} />
                    <input type='text' name='email' id='email' placeholder='Make School Email' value={this.state.email} onChange={this.handleChange} />
                    <input type='password' name='password'  id='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                    <button className='blue_btn' type='submit' disabled={!this.validateForm()}>Signup</button>
                    <p
                        className='text_sm'
                        id='type'
                        onClick={(e) => {
                            e.memberType = 'member'
                            this.handleTypeChange(e)
                        }}>Not a club leader? Click here to sign up as a member.</p>
                </form>
            </div>
        );
    };

    MemberView() {
        return (
            <div className="user-form">
                <img className="med-logo-only" src={logo} alt="Make School"></img>
                <h1 className='h1-primary'>Signup</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='firstName' id='firstName' placeholder='Firt Name' value={this.state.firstName} onChange={this.handleChange} />
                    <input type='text' name='lastName' id='lastName' placeholder='Last Name' value={this.state.lastName} onChange={this.handleChange} />
                    <input type='text' name='username' id='username' placeholder='Username' value={this.state.username} onChange={this.handleChange} />
                    <input type='text' name='number' id='number' placeholder='Phone Number' value={this.state.number} onChange={this.handleChange} />
                    <input type='text' name='email' id='email' placeholder='Make School Email' value={this.state.email} onChange={this.handleChange} />
                    <input type='password' name='password'  id='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                    <button className='blue_btn' type='submit' disabled={!this.validateForm()}>Submit</button>
                </form>
                <p className='text_sm' id='type' onClick={(e) => { 
                    e.memberType = 'leader'
                    this.handleTypeChange(e)
                }}>Want to start a club?</p>
                <p onClick={() => window.location.href = '/login'} className='text_sm'>Already have an account?</p>
            </div>
        );
    };

    render() { 
        if (this.props.user) {
            return <Redirect to='/dashboard' />
        }
        else {
            if (this.state.type === 'member') {
                return this.MemberView();
            };

            if (this.state.type === 'leader') {
                return this.LeaderView();
            };
        };
    };
};

const mapStateToProps = state => {
    return { user: state.user };
};

function mapDispatchToProps() {
    return {
        signupUser
    };
};

const SignupUser = connect(mapStateToProps, mapDispatchToProps())(Signup);


export default SignupUser;
