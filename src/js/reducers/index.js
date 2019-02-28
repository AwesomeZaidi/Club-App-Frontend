// src/js/reducers/index.js

// import { combineReducers } from "redux";
// import authReducer from "./authReducer";
// import errorReducer from "./errorReducer";


// export default combineReducers({
//   auth: authReducer,
//   errors: errorReducer
// });

import { HANDLE_LOGIN, SIGNUP_USER, LOGOUT_USER, HANDLE_SETTINGS, REQUEST_CLUB, VIEW_ALL_CLUBS } from "../constants/action-types";


const initialState = {
  token: "",
  user: "",
  clubs: []
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case HANDLE_LOGIN:
    console.log("IN HANDLE_LOGIN CASE");
      return {...state, token: action.token_payload, user: action.user_payload}
    case SIGNUP_USER:
      return {...state, token: action.token_payload, user: action.user_payload}
    case LOGOUT_USER:
      return {...state, user: "", token: ""}
    case HANDLE_SETTINGS:
      console.log("IN HANDLE_SETTINGS CASE");
    
      return {...state, user: action.payload}
    case REQUEST_CLUB:
      console.log("IN VIEW_ALREQUEST_CLUBL_CLUBS CASE");
      return {...state, user: action.payload}
    case VIEW_ALL_CLUBS:
      console.log("IN VIEW_ALL_CLUBS CASE");
      return {...state, clubs: action.payload}
    default: 
        return state;
  }
};


export default rootReducer;
