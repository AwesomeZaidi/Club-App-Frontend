import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { updateSettings } from "../../js/actions/index";

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.user.username
        };
    };
    
    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.user.username = this.state.username;  
        this.props.updateSettings(this.props.user, this.props.token);
    };

    render() {
        if (!this.props.user) {
            return <Redirect to='/login' />
        };

        return (
            <div>
                <form className='user-form' onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' id='username' value={this.state.username} onChange={this.handleChange} />
                    <button className="btn-primary" type='submit'>Update</button>
                </form>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return { user: state.user, token: state.token};
};

function mapDispatchToProps() {
    return {
        updateSettings
    };
};

const UserSettings = connect(mapStateToProps, mapDispatchToProps())(Settings);

export default UserSettings;
