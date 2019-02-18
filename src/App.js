import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />

        </div>
        // <Route exact path='/login' component={Home} />
        // <Route exact path='/signup' component={Home} />

    );
  }
}

export default App;
