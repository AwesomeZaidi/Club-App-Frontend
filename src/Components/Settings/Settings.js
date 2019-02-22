import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { loginUser } from "../../js/actions/index";
import '../../Styles/user-form.scss';

class Settings extends Component {
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
        if (this.props.token) {
            return <Redirect to='/dashboard' />
        };
        
        return (
            <div>
                <form className='user-form' onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' id='username' placeholder='Username' value={this.state.username} onChange={this.handleChange} />
                    <label htmlFor='password'>Password</label>                    
                    <input type='password' name='password'  id='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                    <button className="btn-primary" type='submit' disabled={!this.validateForm()} >Submit</button>
                </form>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return { token: state.token };
};

function mapDispatchToProps() {
    return {
        loginUser // I DON'T KNOW HOW THIS IS WORKING RIGHT HERE D;
    };
};

const UserSettings = connect(mapStateToProps, mapDispatchToProps())(Settings);

export default UserSettings;
