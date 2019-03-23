import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Settings from './Components/Settings/Settings';
import IncomingRequests from './Components/Admin/IncomingRequests';
import CreateEvent from './Components/Leader/CreateEvent.js';
import Clubs from './Components/Clubs/Clubs.jsx';
import Event from './Components/Event/Event';



// import List from "./List/List";
// import Form from "./Form/Form";
// import Post from "./Posts/Posts";

class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/settings' component={Settings} />
          <Route exact path='/incomingRequests' component={IncomingRequests} />
          <Route exact path='/createevent' component={CreateEvent} />
          <Route exact path='/clubs' component={Clubs} />
          <Route exact path='/event/:id' component={Event} />
        </div>
    );
  }
}

export default App;
