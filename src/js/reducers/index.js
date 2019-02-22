// src/js/reducers/index.js

// import { combineReducers } from "redux";
// import authReducer from "./authReducer";
// import errorReducer from "./errorReducer";


// export defau, lt combineReducers({
//   auth: authReducer,
//   errors: errorReducer
// });

import { ADD_ARTICLE, DATA_LOADED, HANDLE_LOGIN, SIGNUP_USER, LOGOUT_USER } from "../constants/action-types";


const initialState = {
  articles: [],
  token: "",
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_ARTICLE: 
      return { ...state, articles: state.articles.concat(action.payload) }
      break;
    case HANDLE_LOGIN: 
      return {...state, token: action.payload}
      break;
    case SIGNUP_USER: 
      return {...state, token: action.payload}
      break;
    case DATA_LOADED:
      return {...state, remoteArticles: state.remoteArticles.concat(action.payload)}
      break;
    case LOGOUT_USER:
      return {...state, token: ""}
      break;
    default: 
        return state;
  }
};


export default rootReducer;

// the initial state is left utterly untouched.
// The initial articles array doesn’t change in place.
// The initial state object doesn’t change as well. The resulting state is a copy of the initial state.