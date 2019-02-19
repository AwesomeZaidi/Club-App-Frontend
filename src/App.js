import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import List from "./List/List";
import Form from "./Form/Form";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';


class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
          {/* <h2>Articles Example</h2>
          <List />
          <h2>Add a new article</h2>
          <Form /> */}
        </div>
    );
  }
}

export default App;
