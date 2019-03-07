import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Settings from './Components/Settings/Settings';

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
        </div>
    );
  }
}

export default App;
