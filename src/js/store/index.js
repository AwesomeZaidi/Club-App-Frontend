// src/js/store/index.js

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import { forbiddenWordsMiddleware } from "../middlewares";

// const initialState = {}; could be useful for server side rendering if we wanted.

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store is the result of createStore which in turn is a function from the redux library.
// createStore takes a reducer as the first argument and in our case we passed in rootReducer.
const store = createStore(
  rootReducer, // the STATE in REDUX COMES FROM REDUCERS. Let’s make it clear: reducers produce the state of your application.
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
  // initialState
);

export default store;