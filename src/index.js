import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./js/store";
// import index from "./js/index"
import App from './App';
import './Styles/components.scss';
// axios.defaults.withCredentials = true  // enable axios post cookie, default false

ReactDOM.render((
  
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ), document.getElementById('root'));
serviceWorker.unregister();
