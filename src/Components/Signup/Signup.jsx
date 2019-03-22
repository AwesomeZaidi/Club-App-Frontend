import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { signupUser } from "../../js/actions/index";
import logo from '../../Images/logo-only.png';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            whoIsSigningUp: 'member'
        };
    };
  
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
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
        // this.state.member = 'member';
        return (
            <div>
                {/* opportunity to use OOCSS with these forms */}
                <h1>LEADER VIEW Signup</h1>
                <form className='user-form signup-form' onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' id='username' placeholder='Username' value={this.state.username} onChange={this.handleChange} />
                    <label htmlFor='password'>Password</label>                    
                    <input type='password' name='password'  id='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                    <button className='blue_btn' type='submit' disabled={!this.validateForm()}>Signup</button>
                </form>

                <p id='whoIsSigningUp' onClick={(e) => {
                    e.memberType = 'member'
                    this.handleTypeChange(e)
                }}>Not a club leader? Click here to sign up as a member.</p>
            </div>
        );
    };

    MemberView() {
        return (
            <div className="user-form">
                <img className="med-logo-only" src={logo} alt="Make School"></img>
                <h1 class='h1-primary'>Signup</h1>
                <form onSubmit={this.handleSubmit}>
                    {/* <label htmlFor='username'>Username</label> */}
                    <input type='text' name='username' id='username' placeholder='Username' value={this.state.username} onChange={this.handleChange} />
                    {/* <label htmlFor='password'>Password</label> */}
                    <input type='password' name='password'  id='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                    <button className='blue_btn' type='submit' disabled={!this.validateForm()}>Submit</button>
                </form>
                <p class='text_sm' id='whoIsSigningUp' onClick={(e) => { 
                    e.memberType = 'leader'
                    this.handleTypeChange(e)
                }}>Want to start a club?</p>
                <p class='text_sm'>Already have an account?</p>
            </div>
        );
    };

    render() { 
        if (this.props.user) {
            return <Redirect to='/dashboard' />
        }
        else {
            if (this.state.whoIsSigningUp === 'member') {
                return this.MemberView();
            };

            if (this.state.whoIsSigningUp === 'leader') {
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
