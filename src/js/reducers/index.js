// src/js/reducers/index.js

import { HANDLE_LOGIN, SIGNUP_USER, LOGOUT_USER, HANDLE_SETTINGS, REQUEST_CLUB, VIEW_ALL_CLUBS, GET_LEADER_CLUB, HANDLE_ERROR } from "../constants/action-types";

const initialState = {
  user: "", // current user object with all of their info, list of club id's and list of event id's (coming soon.)
  clubs: [], // what is this?
  leaderClub: "",
  error: false
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case HANDLE_LOGIN:
      return {...state, user: action.payload, error: action.payload_error}
    case SIGNUP_USER:
      return {...state, user: action.payload, error: action.payload_error}
    case LOGOUT_USER:
      return {...state, user: "", clubs: []}
    case HANDLE_SETTINGS:
      return {...state, user: action.payload}
    case REQUEST_CLUB:
      return {...state, user: action.payload}
    case VIEW_ALL_CLUBS:
      return {...state, clubs: action.payload}
    case GET_LEADER_CLUB:
      return {...state, leaderClub: action.payload}
      case HANDLE_ERROR:
      return {...state, error: action.payload}
    default: 
        return state;
  }
};


export default rootReducer;
