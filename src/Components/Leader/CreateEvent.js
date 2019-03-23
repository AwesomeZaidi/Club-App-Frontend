import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import axios from 'axios';
import { createEvent } from "../../js/actions/index";
import logo from '../../Images/logo-only.png';
import '../../Styles/dashboard.scss';

class CreateEvent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    };

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    validateForm() {
        return this.state.title.length > 0;
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const eventData = this.state;
        await axios.post(`/event`, eventData).then((res) => {
            console.log("res.data.event:", res.data.event);
            const id = res.data.event._id;
            console.log("id:", id);
            return <Redirect to={`/event/${id}`}/>
        }).catch(console.err);
    };

    render() {
        return (
            <div className="user-form">
                <img className="med-logo-only" src={logo} alt="Make School"></img>
                <h1>Add Event</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='title' id='title' placeholder='Title' value={this.state.title} onChange={this.handleChange} />                  
                    <button className="black_btn" type='submit' disabled={!this.validateForm()} >Submit</button>                     
                </form>
            </div>     
        );
    };
};

const mapStateToProps = state => {
    return { user: state.user};
};

export default connect(mapStateToProps, null)(CreateEvent);
