import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';


class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
        </div>
    );
  }
}

export default App;
