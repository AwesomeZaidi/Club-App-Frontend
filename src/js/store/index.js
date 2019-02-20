// src/js/store/index.js

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import { forbiddenWordsMiddleware } from "../middlewares";
import thunk from "redux-thunk";

// const initialState = {}; could be useful for server side rendering if we wanted.

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const MS_CLUBS_STATE = "MS_CLUBS_STATE"

// Load State
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(MS_CLUBS_STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

// Save State
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(MS_CLUBS_STATE, serializedState)
  } catch(err) {
    console.log("Error saving data")
  }
}

const persistedState = loadState()
// store is the result of createStore which in turn is a function from the redux library.
// createStore takes a reducer as the first argument and in our case we passed in rootReducer.
// const store = createStore(
//   rootReducer, // the STATE in REDUX COMES FROM REDUCERS. Let’s make it clear: reducers produce the state of your application.
//   storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
//   // initialState
// );


const store = createStore(
  rootReducer,
  persistedState,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

store.subscribe(() => {
  saveState(store.getState())
})

export default store;