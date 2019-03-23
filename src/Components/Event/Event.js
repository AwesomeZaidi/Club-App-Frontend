import React, { Component } from 'react';
import axios from 'axios';
import logo from '../../Images/logo-only.png';
import moment from 'moment';
import '../../Styles/event.scss'
class Event extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            date: '',
            timeStart: '',
            timeEnd: '',
            location: '',
            clubTitle: ''
        };
    };
    componentDidMount() {
        // const cutOffUrl = window.location.pathname + 
        const eventId = window.location.pathname.substr(7);
        axios.get('/event', {
            params: {
                eventId: eventId
              }
        }).then((res) => {
            console.log("res.data:", res.data);
            const event = res.data.event;
            const clubTitle = res.data.clubTitle;
            console.log("clubTitle:", clubTitle);
            console.log("event:", event);
                    
            this.setState({
                title: event.title,
                description: event.description,
                date: event.date,
                timeStart: event.timeStart,
                timeEnd: event.timeEnd,
                location: event.location,
                clubTitle: clubTitle
            });
        });
    }
    render() {
        return (
            <div className="event-page">
                <div className="push-down flexbox justify-content-center align-items-center">
                    <img className="small-img-only" src={logo} alt="Make School" />
                    <h1 className='h1-primary'>{this.state.title}</h1>
                </div>
                <div className='push-down-small full-width top-down-center'>
                
                <h2 className='h2-blue'>{moment(this.state.date).format("MM/DD/YYYY")}</h2>
                <p className='reg-text push-down-small'>Time: {this.state.timeStart} - {this.state.timeEnd}</p>
                <p className='reg-text'>Location: {this.state.location}</p>

                <strong><p className='reg-text'>{this.state.clubTitle} Presents</p></strong>             
                <p className='reg-text'>{this.state.description}</p>
                </div>
            </div>
        );
    }
}

export default Event;